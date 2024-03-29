/**
 * Check if a given value is
 * a {@link https://developer.mozilla.org/en-US/docs/Glossary/function | function}.
 *
 * @param value - is a value to check
 * @returns a boolean whether the value is a function or not
 *
 * @example
 * ```
 *  import { isFunction } from "@commonly/reflect"
 *
 *  isFunction(Math.add)        //-> true
 *  isFunction(() => void 0))   //-> true
 *  isFunction(Math.PI)         //-> false
 * ```
 */
const isFunction = <TFunction extends Function>(value: unknown | TFunction): value is TFunction => {
    return typeof value === "function"
}



export default isFunction
