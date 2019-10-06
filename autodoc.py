import os
import re
import json
import argparse

DOC_PATTERN = r'(\/\*\*[\s\S]*?\*\/)(([^{]*?[=|]>?\s*?(\s+?\w+\s+?)(\s*?\|\s+?\w+\s+?)*)|([\s\S]*?(=>\s+?{)))'
TAG_PATTERN = r'@param|@return|@example|@throws|@since|@deprecated'
SINGLE_OCCURRENCE_TAGS = ['return']


def scan_doc(doc: str) -> dict:
    doc, signature = doc.split('\n */\n')
    doc = re.sub(r'(/\*\*)|( \* ?)', '', doc)
    doc = re.sub(r'{@link\s+', '<a href="', doc)
    doc = re.sub(r'\s+\|\s+\w+}', '"/>', doc)
    signature = re.sub(r'\s+', ' ', signature)

    tags = [tag[1:] for tag in re.findall(TAG_PATTERN, doc)]
    values = re.split(TAG_PATTERN, doc)
    description = values[0].strip().replace('\n', ' ').replace('  ', '\n')

    result = {
        'name': re.findall(r'\w+', signature)[1],
        'signature': signature,
        'doc': {'description': description}
    }
    for tag, value in zip(tags, values[1:]):
        if tag in SINGLE_OCCURRENCE_TAGS:
            result['doc'][tag] = value.replace(tag, '').strip()
        else:
            if tag not in result['doc']:
                result['doc'][tag] = []
            if tag == 'param':
                param = value.replace(tag, '').strip().partition(' - ')
                result['doc'][tag].append({'name': param[0], 'description': param[2]})
            else:
                result['doc'][tag].append(value.replace(tag, '').replace('```', '').strip())
    return result


def scan_file(path: str) -> list:
    items = []
    with open(path, 'r') as file:
        matches = re.findall(DOC_PATTERN, file.read())
    for match in matches:
        selection = ''.join(match[:2])
        if selection.endswith('{'):
            selection = selection + '...}'
        doc = scan_doc(selection)
        doc['metadata'] = {'source': path.replace('\\', '/')}
        specification = path.replace('.ts', '.spec.ts')
        if os.path.isfile(specification):
            doc['metadata']['specification'] = specification.replace('\\', '/')
        items.append(doc)
    return items


def scan_package(path: str) -> dict:
    with open(path + '/package.json', 'r') as package_file:
        package = json.load(package_file)
    members = []
    for root, dirs, files in os.walk(path):
        for filename in files:
            if filename.endswith('.ts'):
                file_path = os.path.join(root, filename)
                members.extend(scan_file(file_path))
    package['members'] = members
    return package


def scan_source(path: str) -> dict:
    output = []
    for root, dirs, file_names in os.walk(path):
        if 'package.json' in file_names:
            output.append(scan_package(root))
    return {'packages': output}


def main():
    parser = argparse.ArgumentParser(description='Tool for generating doc json based on jsdocs in source files',
                                     usage='autodoc.py [--input INPUT] [--output OUTPUT]',
                                     epilog='Requires python3 to be installed on the device')
    parser.add_argument('--input', dest='input', default='src', help='path to root source directory, default: "src"')
    parser.add_argument('--output', dest='output', default='autodoc.json', help='output file, default: "autodoc.json"')
    args = parser.parse_args()
    with open(args.output, 'w') as output_file:
        output_file.write(json.dumps(scan_source(args.input), indent='\t'))


if __name__ == '__main__':
    main()
