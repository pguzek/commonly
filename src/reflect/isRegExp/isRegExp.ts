/**
 * Check if a given value is
 * a {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp | RegExp}.
 *
 * @param value - is a value to check
 * @returns a boolean whether the value is a RegExp or not
 *
 * @example
 * ```
 *  import { isRegExp } from "@commonly/reflect"
 *
 *  isRegExp(new RegExp("ab+c"))        //-> true
 *  isRegExp(/ab+c/)                    //-> true
 *  isRegExp(NaN)                       //-> false
 * ```
 */
const isRegExp = (value: unknown | RegExp): value is RegExp => {
    return value instanceof RegExp
}



export default isRegExp
