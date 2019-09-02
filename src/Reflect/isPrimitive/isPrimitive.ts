import isBoolean from "commonly/Reflect/isBoolean/isBoolean"
import isNil from "commonly/Reflect/isNil/isNil"
import isNumber from "commonly/Reflect/isNumber/isNumber"
import isString from "commonly/Reflect/isString/isString"
import isSymbol from "commonly/Reflect/isSymbol/isSymbol"
import Primitive from "commonly/Type/Primitive"



const isPrimitive = (value: unknown | Primitive): value is Primitive => {
    return isNil(value) || isBoolean(value) || isNumber(value) || isString(value) || isSymbol(value)
}



export default isPrimitive
