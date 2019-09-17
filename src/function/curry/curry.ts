import CurriedFunction from "../../type/CurriedFunction"
import VariadicFunction from "../../type/VariadicFunction"
import partial from "../partial/partial"



const curry = <TResult, TParameters extends unknown[]>(
    f: VariadicFunction<TResult, TParameters>
): CurriedFunction<TResult, TParameters> => {
    // @ts-ignore
    const curried = (...varargs: TParameters) => {
        if (varargs.length < f.length) {
            return partial(curried, ...varargs)
        } else {
            return f(...varargs)
        }
    }

    // @ts-ignore
    return curried
}



export default curry
