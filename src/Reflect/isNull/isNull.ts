const isNull = (value: unknown | null): value is null => {
    return value === null
}



export default isNull
