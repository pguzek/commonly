const isError = (value: unknown | Error): value is Error => {
    return value instanceof Error
}



export default isError
