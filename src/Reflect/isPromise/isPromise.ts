const isPromise = <TValue>(value: unknown | Promise<TValue>): value is Promise<TValue> => {
    return value === Promise.resolve(value)
}



export default isPromise
