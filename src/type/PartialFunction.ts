import Function from "./Function"
import TupleShift from "./TupleShift"
import VariadicFunction from "./VariadicFunction"



type PartialFunction<TResult, TParameters extends unknown[], TApplied extends Partial<TParameters>> =
    TApplied extends [ unknown, unknown, unknown, unknown, unknown ]
        ? VariadicFunction<TResult, TupleShift<TupleShift<TupleShift<TupleShift<TupleShift<TParameters>>>>>>
        :
    TApplied extends [ unknown, unknown, unknown, unknown ]
        ? VariadicFunction<TResult, TupleShift<TupleShift<TupleShift<TupleShift<TParameters>>>>>
        :
    TApplied extends [ unknown, unknown, unknown ]
        ? VariadicFunction<TResult, TupleShift<TupleShift<TupleShift<TParameters>>>>
        :
    TApplied extends [ unknown, unknown ]
        ? VariadicFunction<TResult, TupleShift<TupleShift<TParameters>>>
        :
    TApplied extends [ unknown ]
        ? VariadicFunction<TResult, TupleShift<TParameters>>
        :
    TApplied extends []
        ? VariadicFunction<TResult, TParameters>
        :
    never



export default PartialFunction
