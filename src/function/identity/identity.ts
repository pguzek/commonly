/**
 * In mathematics, an identity function, also called an identity relation or identity map or identity transformation,
 * is a function that always returns the same value that was used as its argument.
 * That is, for f being identity the equality f(x) = x holds for all x.
 *
 * @param value - is any given value
 * @return a passed in value
 */
const identity = <TValue>(value: TValue): TValue => {
    return value
}



export default identity
