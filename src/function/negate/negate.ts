import VariadicFunction from "../../type/VariadicFunction"



const negate = <TResult, TParameters extends unknown[]>(
    f: VariadicFunction<TResult, TParameters>
): VariadicFunction<boolean, TParameters> => {
    return (...varargs: TParameters): boolean => {
        return !f(...varargs)
    }
}



export default negate
