const isNumber = (value: unknown | number): value is number => {
    return typeof value === "number" || value instanceof Number
}



export default isNumber
