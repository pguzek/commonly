import CurriedFunction from "../../type/CurriedFunction"
import VariadicFunction from "../../type/VariadicFunction"
import partial from "../partial/partial"
import size from "../size/size"



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
