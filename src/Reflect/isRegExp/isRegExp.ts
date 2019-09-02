const isRegExp = (value: unknown | RegExp): value is RegExp => {
    return value instanceof RegExp
}



export default isRegExp
