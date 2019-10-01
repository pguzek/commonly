import curry from "../../function/curry/curry"



export type FunctionSignature = {
    (minuend: number, subtrahend: number): number
    (minuend: number): (subtrahend: number) => number
}


/**
 * Subtracts two quantities using the minus operator.
 *
 * @param minuend - is a quantity from which another (the subtrahend) is subtracted
 * @param subtrahend - is a quantity which is subtracted from another (the minuend)
 * @return a difference
 *
 * @example
 * ```
 *  import { subtract } from "@commonly/math"
 *
 *  subtract(3, 2)  // -> 1
 * ```
 */
const subtract = (minuend: number, subtrahend: number) => {
    return minuend - subtrahend
}



export default curry(subtract) as FunctionSignature
