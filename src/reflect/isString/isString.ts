/**
 * Check if a given value is
 * a {@link https://developer.mozilla.org/en-US/docs/Glossary/string | string}.
 *
 * @param value - is a value to check
 * @returns a boolean whether the value is a string or not
 *
 * @example
 * ```
 *  import { isString } from "@commonly/reflect"
 *
 *  isString("string")   //-> true
 *  isString(null)       //-> false
 * ```
 */
const isString = (value: unknown | string): value is string => {
    return typeof value === "string" || value instanceof String
}



export default isString
