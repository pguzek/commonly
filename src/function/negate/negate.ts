import VariadicFunction from "../../type/VariadicFunction"



/**
 * Negates a given predicate function, thus creating a new negated version of that function.
 *
 * @param predicate - is a function to be negated
 * @return a negated version of a predicate function
 *
 * @example
 * ```
 *  import { negate } from "@commonly/function"
 *
 *  const isUnsealed = negate(Object.isSealed)
 *  isUnsealed(window)  // -> true
 * ```
 */
const negate = <TResult, TParameters extends unknown[]>(
    predicate: VariadicFunction<TResult, TParameters>
): VariadicFunction<boolean, TParameters> => {
    return (...varargs: TParameters): boolean => {
        return !predicate(...varargs)
    }
}



export default negate
