import isNull from "commonly/Reflect/isNull/isNull"



const isObject = (value: unknown | object): value is object => {
    return typeof value === "object" && !isNull(value)
}



export default isObject
