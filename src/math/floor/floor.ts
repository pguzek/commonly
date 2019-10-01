import curry from "../../function/curry/curry"



export type FunctionSignature = {
    (precision: number | undefined, number: number): number
    (precision: number | undefined): (number: number) => number
}


/**
 * Rounds the number down to a precision.
 *
 * @param [precision] - is a precision to round down to
 * @param number - is a number to round down
 * @return a rounded down number
 *
 * @example
 * ```
 *  import { floor } from "@commonly/Math"
 *
 *  floor(0, 0.333)   // -> 1
 *  floor(1, 0.333)   // -> 0.4
 *  floor(2, 0.333)   // -> 0.34
 * ```
 */
const floor = (precision: number = 0, number: number): number => {
    precision = Math.pow(10, precision)
    return Math.floor(number * precision) / precision
}



export default curry(floor) as FunctionSignature
