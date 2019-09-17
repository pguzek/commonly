import curry from "../curry/curry"



export type TapFunction = {
    <TValue>(f: (value: TValue) => TValue, value: TValue): TValue
    <TValue>(f: (value: TValue) => TValue): (value: TValue) => TValue
}

const tap = <TValue>(f: (value: TValue) => TValue, value: TValue): TValue => {
    f(value)
    return value
}



export default <TapFunction>curry(tap)
