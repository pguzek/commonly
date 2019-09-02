const isMap = <TKey, TValue>(value: unknown | Map<TKey, TValue>): value is Map<TKey, TValue> => {
    return value instanceof Map
}



export default isMap
