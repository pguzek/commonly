/**
 * Check if a given value is
 * an {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error | Error}.
 *
 * @param value - is a value to check
 * @returns a boolean whether the value is an Error or not
 *
 * @example
 * ```
 *  import { isError } from "@commonly/reflect"
 *
 *  isError(new Error())    //-> true
 *  isError(TypeError())    //-> true
 *  isError(NaN)            //-> false
 * ```
 */
const isError = (value: unknown | Error): value is Error => {
    return value instanceof Error
}



export default isError
