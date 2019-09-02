const isSymbol = (value: unknown | symbol): value is symbol => {
    return typeof value === "symbol"
}



export default isSymbol
