const isUndefined = (value: unknown | undefined): value is undefined => {
    return value === undefined
}



export default isUndefined
