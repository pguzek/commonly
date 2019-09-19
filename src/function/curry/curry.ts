import CurriedFunction from "../../type/CurriedFunction"
import VariadicFunction from "../../type/VariadicFunction"
import partial from "../partial/partial"
import size from "../size/size"



const curry = <TResult, TParameters extends unknown[]>(
    f: VariadicFunction<TResult, TParameters>
): CurriedFunction<TResult, TParameters> => {
    const curried = (df: VariadicFunction<TResult, TParameters>) => (...varargs: TParameters) => {
        const partially = partial(df, ...varargs)
        if (size(partially) > 0) {
            return curried(partially)
        } else {
            return partially(...varargs)
        }
    }

    return curried(f) as unknown as CurriedFunction<TResult, TParameters>
}



export default curry
