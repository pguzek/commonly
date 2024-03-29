import isBoolean from "../isBoolean/isBoolean"
import isNil from "../isNil/isNil"
import isNumber from "../isNumber/isNumber"
import isString from "../isString/isString"
import isSymbol from "../isSymbol/isSymbol"
import Primitive from "../../type/Primitive"



/**
 * Check if a given value is
 * a {@link @commonly/type:Primitive | Primitive}.
 *
 * @param value - is a value to check
 * @returns a boolean whether the value is a {@link @commonly/type:Primitive | Primitive} or not
 *
 * @example
 * ```
 *  import { isPrimitive } from "@commonly/reflect"
 *
 *  isPrimitive(undefined)   //-> true
 *  isPrimitive(null)        //-> true
 *  isPrimitive(NaN)         //-> true
 *  isPrimitive([])          //-> false
 * ```
 */
const isPrimitive = (value: unknown | Primitive): value is Primitive => {
    return isNil(value) || isBoolean(value) || isNumber(value) || isString(value) || isSymbol(value)
}



export default isPrimitive
