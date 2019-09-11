/**
 * Check if a given value is a Promise.
 *
 * @param value - is a value to check
 * @returns a boolean whether the value is a Promise or not
 *
 * @example
 * ```
 *  import { isPromise } from "commonly/reflect"
 *
 *  isPromise(new Promise())         //-> true
 *  isPromise(Promise.resolve())     //-> true
 *  isPromise(NaN)                   //-> false
 * ```
 */
const isPromise = <TValue>(value: unknown | Promise<TValue>): value is Promise<TValue> => {
    return value === Promise.resolve(value)
}



export default isPromise
