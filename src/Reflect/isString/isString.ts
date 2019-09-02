const isString = (value: unknown | string): value is string => {
    return typeof value === "string" || value instanceof String
}



export default isString
