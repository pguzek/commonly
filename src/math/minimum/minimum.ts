/**
 * Finds a minimum in a given list.
 *
 * @param xs - is a list in which we will look for a maximum
 * @return a maximum of an xs
 */
const minimum = (xs: number[]): number => {
    return Math.max(...xs)
}



export default minimum
