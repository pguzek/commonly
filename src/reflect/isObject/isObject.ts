import isNull from "../isNull/isNull"



/**
 * Check if a given value is
 * an {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object | Object}.
 *
 * @param value - is a value to check
 * @returns a boolean whether the value is an Object or not
 *
 * @example
 * ```
 *  import { isObject } from "@commonly/reflect"
 *
 *  isObject(new Object())      //-> true
 *  isObject({})                //-> true
 *  isObject(null)              //-> false
 *  isObject(undefined)         //-> false
 * ```
 */
const isObject = (value: unknown | object): value is object => {
    return typeof value === "object" && !isNull(value)
}



export default isObject
