import CurriedBinaryFunction from "./CurriedBinaryFunction"
import UnaryFunction from "./UnaryFunction"



type CurriedTernaryFunction<TResult, TA, TB, TC> = {
    (a: TA, b: TB, c: TC): TResult
    (a: TA, b: TB): UnaryFunction<TResult, TC>
    (a: TA): CurriedBinaryFunction<TResult, TB, TC>
}



export default CurriedTernaryFunction
