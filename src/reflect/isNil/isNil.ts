import isNull      from "../isNull/isNull"
import isUndefined from "../isUndefined/isUndefined"
import Nil         from "../../Type/Nil"



/**
 * Check if a given value is a {@link @commonly/type:Nil | Nil} (either an undefined or a null).
 *
 * @param value - is a value to check
 * @returns a boolean whether the value is a {@link @commonly/type:Nil | Nil} or not
 *
 * @example
 * ```
 *  import { isNil } from "commonly/reflect"
 *
 *  isNil(undefined)   //-> true
 *  isNil(null)        //-> true
 *  isNil(NaN)         //-> false
 * ```
 */
const isNil = (value: unknown | Nil): value is Nil => {
    return isUndefined(value) || isNull(value)
}



export default isNil
