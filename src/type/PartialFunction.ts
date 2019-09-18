import { Reorder, Shift } from "./Tuple"
import VariadicFunction from "./VariadicFunction"



type PartialFunction<TResult, TParameters extends unknown[], TApplied extends unknown[]> =
    TApplied extends (unknown | undefined)[]
        ? VariadicFunction<TResult, unknown[]>
        :
    TApplied extends [ unknown, unknown, unknown, unknown, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Shift<Shift<Shift<TParameters>>>>>>
        :

    TApplied extends [ undefined, undefined, undefined, undefined ]
        ? VariadicFunction<TResult, TParameters>
        :
    TApplied extends [ undefined, undefined, undefined, unknown ]
        ? VariadicFunction<TResult, Shift<Reorder<TParameters, [ 3, 0, 1, 2, 4 ]>>>
        :
    TApplied extends [ undefined, undefined, unknown, undefined ]
        ? VariadicFunction<TResult, Shift<Reorder<TParameters, [ 2, 0, 1, 3, 4 ]>>>
        :
    TApplied extends [ undefined, unknown, undefined, undefined ]
        ? VariadicFunction<TResult, Shift<Reorder<TParameters, [ 1, 0, 2, 3, 4 ]>>>
        :
    TApplied extends [ unknown, undefined, undefined, undefined ]
        ? VariadicFunction<TResult, Shift<TParameters>>
        :
    TApplied extends [ undefined, undefined, unknown, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Reorder<TParameters, [ 2, 3, 0, 1, 4 ]>>>>
        :
    TApplied extends [ undefined, unknown, undefined, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Reorder<TParameters, [ 1, 3, 0, 2, 4 ]>>>>
        :
    TApplied extends [ unknown, undefined, undefined, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Reorder<TParameters, [ 0, 3, 1, 2, 4 ]>>>>
        :
    TApplied extends [ undefined, unknown, unknown, undefined ]
        ? VariadicFunction<TResult, Shift<Shift<Reorder<TParameters, [ 1, 2, 0, 3, 4 ]>>>>
        :
    TApplied extends [ unknown, undefined, unknown, undefined ]
        ? VariadicFunction<TResult, Shift<Shift<Reorder<TParameters, [ 0, 2, 1, 3, 4 ]>>>>
        :
    TApplied extends [ unknown, unknown, undefined, undefined ]
        ? VariadicFunction<TResult, Shift<Shift<TParameters>>>
        :
    TApplied extends [ undefined, unknown, unknown, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Shift<Reorder<TParameters, [ 1, 2, 3, 0, 4 ]>>>>>
        :
    TApplied extends [ unknown, undefined, unknown, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Shift<Reorder<TParameters, [ 0, 2, 3, 1, 4 ]>>>>>
        :
    TApplied extends [ unknown, unknown, undefined, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Shift<Reorder<TParameters, [ 0, 1, 3, 2, 4 ]>>>>>
        :
    TApplied extends [ unknown, unknown, unknown, undefined ]
        ? VariadicFunction<TResult, Shift<Shift<Shift<TParameters>>>>
        :
    TApplied extends [ unknown, unknown, unknown, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Shift<Shift<TParameters>>>>>
        :

    TApplied extends [ undefined, undefined, undefined ]
        ? VariadicFunction<TResult, TParameters>
        :
    TApplied extends [ undefined, undefined, unknown ]
        ? VariadicFunction<TResult, Shift<Reorder<TParameters, [ 2, 0, 1, 3, 4 ]>>>
        :
    TApplied extends [ undefined, unknown, undefined ]
        ? VariadicFunction<TResult, Shift<Reorder<TParameters, [ 1, 0, 2, 3, 4 ]>>>
        :
    TApplied extends [ unknown, undefined, undefined ]
        ? VariadicFunction<TResult, Shift<TParameters>>
        :
    TApplied extends [ undefined, unknown, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Reorder<TParameters, [ 1, 2, 0, 3, 4 ]>>>>
        :
    TApplied extends [ unknown, undefined, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Reorder<TParameters, [ 0, 2, 1, 3, 4 ]>>>>
        :
    TApplied extends [ unknown, unknown, undefined ]
        ? VariadicFunction<TResult, Shift<Shift<TParameters>>>
        :
    TApplied extends [ unknown, unknown, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Shift<TParameters>>>>
        :

    TApplied extends [ undefined, undefined ]
        ? VariadicFunction<TResult, TParameters>
        :
    TApplied extends [ unknown, undefined ]
        ? VariadicFunction<TResult, Shift<TParameters>>
        :
    TApplied extends [ undefined, unknown ]
        ? VariadicFunction<TResult, Shift<Reorder<TParameters, [ 1, 0, 2, 3, 4 ]>>>
        :
    TApplied extends [ unknown, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<TParameters>>>
        :

    TApplied extends [ undefined ]
        ? VariadicFunction<TResult, TParameters>
        :
    TApplied extends [ unknown ]
        ? VariadicFunction<TResult, Shift<TParameters>>
        :

    TApplied extends []
        ? VariadicFunction<TResult, TParameters>
        :
    never



export default PartialFunction
