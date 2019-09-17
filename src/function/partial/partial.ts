import PartialFunction from "../../type/PartialFunction"
import VariadicFunction from "../../type/VariadicFunction"



const partial = <TResult, TParameters extends unknown[], TApplied extends Partial<TParameters>>(
    f: VariadicFunction<TResult, TParameters>,
    ...applied: TApplied
): PartialFunction<TResult, TParameters, TApplied> => {
    // @ts-ignore
    const partially = (...varargs) => {
        const combined = [ ...applied, ...varargs ] as TParameters
        return f(...combined)
    }

    // @ts-ignore
    return partially
}



export default partial
