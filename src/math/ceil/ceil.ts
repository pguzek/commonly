import curry from "../../function/curry/curry"



export type FunctionSignature = {
    (precision: number | undefined, number: number): number
    (precision: number | undefined): (number: number) => number
}


/**
 * Rounds the number up to a precision.
 *
 * @param [precision] - is a precision to round up to
 * @param number - is a number to round up
 * @return a rounded up number
 *
 * @example
 * ```
 *  import { ceil } from "@commonly/Math"
 *
 *  ceil(0, 0.333)   // -> 1
 *  ceil(1, 0.333)   // -> 0.4
 *  ceil(2, 0.333)   // -> 0.34
 * ```
 */
const ceil = (precision: number = 0, number: number): number => {
    precision = Math.pow(10, precision)
    return Math.ceil(number * precision) / precision
}



export default curry(ceil) as FunctionSignature
