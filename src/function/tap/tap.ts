import curry from "../curry/curry"



export type FunctionSignature = {
    <TValue>(interceptor: (value: TValue) => TValue, value: TValue): TValue
    <TValue>(interceptor: (value: TValue) => TValue): (value: TValue) => TValue
}


/**
 * Intercepts a given value and then returns that value.
 * It lets you "tap into" a function chain, in order to perform operations on intermediate results within that chain.
 *
 * @param interceptor - is a function which will be invoked with a value as a single argument
 * @param value - is a value which will be intercepted by the interceptor
 * @return a passed in value
 *
 * @example
 * ```
 *  import { tap } from "@commonly/function"
 *
 *  fetch("https://reqres.in/api/users/2")
 *      .then(response => response.json())
 *      .then(tap(console.log))
 *      .then(processUser)
 * ```
 */
const tap = <TValue>(interceptor: (value: TValue) => TValue, value: TValue): TValue => {
    interceptor(value)
    return value
}



export default curry(tap) as FunctionSignature
