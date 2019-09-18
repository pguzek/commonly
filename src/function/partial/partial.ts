import PartialFunction from "../../type/PartialFunction"
import VariadicFunction from "../../type/VariadicFunction"
import size from "../size/size"



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

    return partially as PartialFunction<TResult, TParameters, TApplied>
}



export default partial
