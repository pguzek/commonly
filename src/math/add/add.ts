import curry from "../../function/curry/curry"



type AddFunction = {
    (augend: number, addend: number): number
    (augend: number): (addend: number) => number
}


/**
 * Combines two quantities using the plus operator.
 *
 * @param augend - is the first of two addends
 * @param addend - is the second of two addends
 * @return a sum
 */
const add = (augend: number, addend: number) => {
    return augend + addend
}



export default curry(add) as AddFunction
