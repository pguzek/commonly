/**
 * Check if a given value is a {@link https://developer.mozilla.org/en-US/docs/Glossary/boolean | boolean}.
 *
 * @param value - is a value to check
 * @returns a boolean whether the value is a boolean or not
 *
 * @example
 * ```
 *  import { isBoolean } from "commonly/reflect"
 *
 *  isBoolean(true)     //-> true
 *  isBoolean(false)    //-> true
 *  isBoolean(NaN)      //-> false
 * ```
 */
const isBoolean = (value: unknown | boolean): value is boolean => {
    return typeof value === "boolean" || value instanceof Boolean
}



export default isBoolean
