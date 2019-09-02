const isBoolean = (value: unknown | boolean): value is boolean => {
    return typeof value === "boolean" || value instanceof Boolean
}



export default isBoolean
