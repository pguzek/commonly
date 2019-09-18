import PartialFunction from "../../type/PartialFunction"
import VariadicFunction from "../../type/VariadicFunction"
import __ from "../__/__"
import size from "../size/size"


const partial = <TResult, TParameters extends unknown[], TApplied extends unknown[]>(
    f: VariadicFunction<TResult, TParameters>,
    ...applied: TApplied
): PartialFunction<TResult, TParameters, TApplied> => {
    const combined = [ ...applied ] as TParameters
    // @ts-ignore
    const partially = (...varargs) => {
        for(let i = 0; i < size(combined); i++) {
            if (combined[i] === undefined) {
                combined[i] = varargs.shift()
            }
        }
        combined.push(...varargs)
        return f(...combined)
    }

    // @ts-ignore
    return partially
}



export default partial


// partial(foo, 1, __, 3)(2)
