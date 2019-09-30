/**
 * Always returns an undefined no matter the arguments.
 *
 * @param varargs
 * @return an undefined
 */
const noop = (...varargs: unknown[]): void => {
    return undefined
}


export default noop
