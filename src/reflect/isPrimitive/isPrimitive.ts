import isBoolean from "../isBoolean/isBoolean"
import isNil from "../isNil/isNil"
import isNumber from "../isNumber/isNumber"
import isString from "../isString/isString"
import isSymbol from "../isSymbol/isSymbol"
import Primitive from "../../Type/Primitive"



const isPrimitive = (value: unknown | Primitive): value is Primitive => {
    return isNil(value) || isBoolean(value) || isNumber(value) || isString(value) || isSymbol(value)
}



export default isPrimitive
