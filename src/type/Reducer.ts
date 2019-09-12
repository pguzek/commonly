/**
 * The Reducer type represents a function which takes an accumulator and a value and returns a value.
 */
type Reducer<TAccumulator, TResult, TValue> =
    (accumulator: TAccumulator, value: TValue) =>
        TResult



export default Reducer
