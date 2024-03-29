/**
 * Check if a given value is
 * a {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set | Set}.
 *
 * @param value - is a value to check
 * @returns a boolean whether the value is a Set or not
 *
 * @example
 * ```
 *  import { isSet } from "@commonly/reflect"
 *
 *  isSet(new Set())     //-> true
 *  isSet(NaN)           //-> false
 * ```
 */
const isSet = <TValue>(value: unknown | Set<TValue>): value is Set<TValue> => {
    return value instanceof Set
}



export default isSet
