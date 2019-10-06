import curry from "../../function/curry/curry"



export type FunctionSignature = {
    (dividend: number, divisor: number): number
    (dividend: number): (divisor: number) => number
}


/**
 * Divides two quantities.
 *
 * @param dividend - is a quantity that is divided by another quantity
 * @param divisor - is a quantity which divides a dividend
 * @return a quotient
 *
 * @example
 * ```
 *  import { divide } from "@commonly/math"
 *
 *  divide(3, 2)    // -> 1.5
 * ```
 */
const divide = (dividend: number, divisor: number) => {
    return dividend / divisor
}



export default curry(divide) as FunctionSignature


