import isUndefined from "../../reflect/isUndefined/isUndefined"
import PartialFunction from "../../type/PartialFunction"
import VariadicFunction from "../../type/VariadicFunction"
import negate from "../negate/negate"
import size from "../size/size"



/**
 * Partially applies a list of arguments to an f function.
 *
 * @param f - is a function to partially apply list of arguments to
 * @param applied - is a list of arguments to be prepended to an f function
 * @return a partially applied f function
 *
 * @example
 * ```
 *  import { partial } from "@commonly/function"
 *
 *  const isNaN = partial(Object.is, NaN)
 *  isNaN(NaN)  // -> true
 * ```
 */
const partial = <TResult, TParameters extends unknown[], TApplied extends unknown[]>(
    f: VariadicFunction<TResult, TParameters>,
    ...applied: TApplied
): PartialFunction<TResult, TParameters, TApplied> => {
    const combined = [ ...applied ] as TParameters
    const partially = (...varargs: unknown[]) => {
        for(let i = 0; i < size(combined); i++) {
            if (combined[i] === undefined) {
                combined[i] = varargs.shift()
            }
        }
        combined.push(...varargs)
        return f(...combined)
    }

    Object.defineProperties(partially, {
        name: {
            value: f.name,
            configurable: true,
            enumerable: false,
            writable: false
        },
        length: {
            configurable: true,
            enumerable: false,
            writable: false,
            value: size(f) - size(applied.filter(negate(isUndefined)))
        },
        toString: {
            value: f.toString.bind(f),
            configurable: true,
            enumerable: false,
            writable: true
        }
    })

    return partially as PartialFunction<TResult, TParameters, TApplied>
}



export default partial
