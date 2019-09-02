const isFunction = (value: unknown | Function): value is Function => {
    return typeof value === "function"
}



export default isFunction
