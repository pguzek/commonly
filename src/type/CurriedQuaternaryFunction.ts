import CurriedBinaryFunction from "./CurriedBinaryFunction"
import CurriedTernaryFunction from "./CurriedTernaryFunction"
import UnaryFunction from "./UnaryFunction"



type CurriedQuaternaryFunction<TResult, TA, TB, TC, TD> = {
    (a: TA, b: TB, c: TC, d: TD): TResult
    (a: TA, b: TB, c: TC): UnaryFunction<TResult, TD>
    (a: TA, b: TB): CurriedBinaryFunction<TResult, TC, TD>
    (a: TA): CurriedTernaryFunction<TResult, TB, TC, TD>
}



export default CurriedQuaternaryFunction
