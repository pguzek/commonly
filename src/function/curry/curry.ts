import isUndefined from "../../reflect/isUndefined/isUndefined"
import CurriedFunction from "../../type/CurriedFunction"
import VariadicFunction from "../../type/VariadicFunction"
import partial from "../partial/partial"
import size from "../size/size"



const curry = <TResult, TParameters extends unknown[]>(
    f: VariadicFunction<TResult, TParameters>
): CurriedFunction<TResult, TParameters> => {
    const curried = (applied: unknown[], placeholders: number) => (...varargs: TParameters) => {
        const combined = [ ...applied, ...varargs ]
        for (const argument of varargs) {
            if (isUndefined(argument)) {
                placeholders++
            }
        }
        if (size(combined) - placeholders < size(f)) {
            return curried(combined, placeholders)
        } else {
            const parameters = combined.slice(0, size(f)),
                replacements = combined.slice(size(f))
            return partial(f, ...parameters)(...replacements)
        }
    }

    return curried([], 0) as CurriedFunction<TResult, TParameters>
}



export default curry
