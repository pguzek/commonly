import curry from "../../function/curry/curry"



export type FunctionSignature = {
    (multiplier: number, multiplicand: number): number
    (multiplier: number): (multiplicand: number) => number
}


/**
 * Multiplies two quantities.
 *
 * @param multiplier - is a quantity by which another (the multiplicand) is multiplied
 * @param multiplicand - is a quantity that is multiplied by another (the multiplier)
 * @return a product
 *
 * @example
 * ```
 *  import { multiply } from "@commonly/math"
 *
 *  multiply(3, 2)  // -> 6
 * ```
 */
const multiply = (multiplier: number, multiplicand: number) =>
    multiplier * multiplicand



export default curry(multiply) as FunctionSignature
