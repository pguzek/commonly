/**
 * Check if a given value is
 * a {@link https://developer.mozilla.org/en-US/docs/Glossary/number | number}.
 *
 * @param value - is a value to check
 * @returns a boolean whether the value is a number or not
 *
 * @example
 * ```
 *  import { isNumber } from "@commonly/reflect"
 *
 *  isNumber(0)           //-> true
 *  isNumber(NaN)         //-> true
 *  isNumber(null)        //-> false
 * ```
 */
const isNumber = (value: unknown | number): value is number => {
    return typeof value === "number" || value instanceof Number
}



export default isNumber
