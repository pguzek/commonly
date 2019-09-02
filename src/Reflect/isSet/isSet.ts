const isSet = <TValue>(value: unknown | Set<TValue>): value is Set<TValue> => {
    return value instanceof Set
}



export default isSet
