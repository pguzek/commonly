import CurriedVariadicFunction from "../../type/CurriedVariadicFunction"
import VariadicFunction from "../../type/VariadicFunction"



interface CurriedSignature<
    TResult,
    TParameters extends unknown[]
> extends
    VariadicFunction<
        CurriedSignature<
            TResult,
            [ TParameters[1], TParameters[2], TParameters[3] ]
        > | TResult, TParameters
    > {}

const curry = <TResult, TParameters extends unknown[]>(
    f: (...varargs: TParameters) => TResult,
    signatures: CurriedSignature<TResult, TParameters>[]
): CurriedVariadicFunction<TResult, TParameters> => {
    return null as any
}



export default curry
