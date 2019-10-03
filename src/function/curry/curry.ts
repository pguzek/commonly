import CurriedFunction from "../../type/CurriedFunction"
import VariadicFunction from "../../type/VariadicFunction"
import partial from "../partial/partial"
import size from "../size/size"



/**
 * Preforms a {@link https://en.wikipedia.org/wiki/Currying | currying} of an f function.
 *
 * @param f - is a function to be curried
 * @return a curried version of an f function
 *
 * @example
 * ```
 *  import { curry } from "@commonly/function"
 *
 *  const power = curry(Math.pow)
 *  power(2)(3)     // -> 8
 * ```
 */
const curry = <TResult, TParameters extends unknown[]>(
    f: VariadicFunction<TResult, TParameters>
): CurriedFunction<TResult, TParameters> => {
    const curried = (...varargs: TParameters) => {
        const partially = partial(f, ...varargs)
        if (size(partially) > 0) {
            return curry(partially)
        } else {
            return partially(...varargs)
        }
    }

    Object.defineProperties(curried, {
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
            value: size(f)
        },
        toString: {
            value: f.toString.bind(f),
            configurable: true,
            enumerable: false,
            writable: true
        }
    })

    return curried as unknown as CurriedFunction<TResult, TParameters>
}



export default curry
