import isNull      from "commonly/Reflect/isNull/isNull"
import isUndefined from "commonly/Reflect/isUndefined/isUndefined"
import Nil         from "commonly/Type/Nil"



const isNil = (value: unknown | Nil): value is Nil => {
    return isUndefined(value) || isNull(value)
}



export default isNil
