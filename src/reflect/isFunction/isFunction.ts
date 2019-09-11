/**
 * Check if a given value is a function.
 *
 * @param value - is a value to check
 * @returns a boolean whether the value is a function or not
 *
 * @example
 * ```
 *  import { isFunction } from "commonly/reflect"
 *
 *  isFunction(Math.add)        //-> true
 *  isFunction(() => void 0))   //-> true
 *  isFunction(Math.PI)         //-> false
 * ```
 */
const isFunction = (value: unknown | Function): value is Function => {
    return typeof value === "function"
}



export default isFunction
