/**
 * Check if a given value is a null.
 *
 * @param value - is a value to check
 * @returns a boolean whether the value is a null or not
 *
 * @example
 * ```
 *  import { isNull } from "commonly/reflect"
 *
 *  isNull(null)        //-> true
 *  isNull(undefined)   //-> false
 * ```
 */
const isNull = (value: unknown | null): value is null => {
    return value === null
}



export default isNull
