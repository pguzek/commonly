/**
 * Check if a given value is a symbol.
 *
 * @param value - is a value to check
 * @returns a boolean whether the value is a symbol or not
 *
 * @example
 * ```
 *  import { isSymbol } from "commonly/reflect"
 *
 *  isSymbol(Symbol())      //-> true
 *  isSymbol(NaN)           //-> false
 * ```
 */
const isSymbol = (value: unknown | symbol): value is symbol => {
    return typeof value === "symbol"
}



export default isSymbol
