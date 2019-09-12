import UnaryFunction from "./UnaryFunction"



type CurriedBinaryFunction<TResult, TA, TB> = {
    (a: TA, b: TB): TResult
    (a: TA): UnaryFunction<TResult, TB>
}



export default CurriedBinaryFunction
