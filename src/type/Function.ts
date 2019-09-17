import BinaryFunction from "./BinaryFunction"
import NullaryFunction from "./NullaryFunction"
import QuaternaryFunction from "./QuaternaryFunction"
import QuinaryFunction from "./QuinaryFunction"
import TernaryFunction from "./TernaryFunction"
import UnaryFunction from "./UnaryFunction"



type Function<TResult, TParameters extends unknown[]> =
    TParameters extends [ unknown, unknown, unknown, unknown, unknown ]
        ? QuinaryFunction<TResult, TParameters[0], TParameters[1], TParameters[2], TParameters[3], TParameters[4]>
        :
    TParameters extends [ unknown, unknown, unknown, unknown ]
        ? QuaternaryFunction<TResult, TParameters[0], TParameters[1], TParameters[2], TParameters[3]>
        :
    TParameters extends [ unknown, unknown, unknown ]
        ? TernaryFunction<TResult, TParameters[0], TParameters[1], TParameters[2]>
        :
    TParameters extends [ unknown, unknown ]
        ? BinaryFunction<TResult, TParameters[0], TParameters[1]>
        :
    TParameters extends [ unknown ]
        ? UnaryFunction<TResult, TParameters[0]>
        :
    TParameters extends []
        ? NullaryFunction<TResult>
        :
    never



export default Function
