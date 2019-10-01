import curry from "../../function/curry/curry"



export type FunctionSignature = {
    (precision: number | undefined, number: number): number
    (precision: number | undefined): (number: number) => number
}


/**
 * Rounds the number to a precision.
 *
 * @param [precision] - is a precision to round to
 * @param number - is a number to round
 * @return a rounded number
 *
 * @example
 * ```
 *  import { round } from "@commonly/Math"
 *
 *  round(0, 0.333)   // -> 1
 *  round(1, 0.333)   // -> 0.4
 *  round(2, 0.333)   // -> 0.34
 * ```
 */
const round = (precision: number = 0, number: number): number => {
    precision = Math.pow(10, precision)
    return Math.round(number * precision) / precision
}



export default curry(round) as FunctionSignature
