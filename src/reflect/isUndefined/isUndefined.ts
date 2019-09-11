/**
 * Check if a given value is an undefined.
 *
 * @param value - is a value to check
 * @returns a boolean whether the value is an undefined or not
 *
 * @example
 * ```
 *  import { isUndefined } from "commonly/reflect"
 *
 *  isUndefined(undefined)   //-> true
 *  isUndefined(null)        //-> false
 * ```
 */
const isUndefined = (value: unknown | undefined): value is undefined => {
    return value === undefined
}



export default isUndefined
