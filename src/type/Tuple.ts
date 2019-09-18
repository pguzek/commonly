export type Pop<TTuple extends unknown[]> =
    TTuple extends [ unknown, unknown, unknown, unknown, unknown ]
        ? [ TTuple[0], TTuple[1], TTuple[2], TTuple[3] ]
        :
        TTuple extends [ unknown, unknown, unknown, unknown ]
            ? [ TTuple[0], TTuple[1], TTuple[2] ]
            :
            TTuple extends [ unknown, unknown, unknown ]
                ? [ TTuple[0], TTuple[1] ]
                :
                TTuple extends [ unknown, unknown ]
                    ? [ TTuple[0] ]
                    :
                    TTuple extends [ unknown ]
                        ? [ void ]
                        :
                        never


export type Shift<TTuple extends unknown[]> =
    TTuple extends [ unknown, unknown, unknown, unknown, unknown ]
        ? [ TTuple[1], TTuple[2], TTuple[3], TTuple[4] ]
        :
        TTuple extends [ unknown, unknown, unknown, unknown ]
            ? [ TTuple[1], TTuple[2], TTuple[3] ]
            :
            TTuple extends [ unknown, unknown, unknown ]
                ? [ TTuple[1], TTuple[2] ]
                :
                TTuple extends [ unknown, unknown ]
                    ? [ TTuple[1] ]
                    :
                    TTuple extends [ unknown ]
                        ? [ void ]
                        :
                        never


export type Reorder<TTuple extends unknown[], TIndexes extends number[]> =
    TTuple extends [ unknown, unknown, unknown, unknown, unknown ]
        ? [ TTuple[TIndexes[0]], TTuple[TIndexes[1]], TTuple[TIndexes[2]], TTuple[TIndexes[3]], TTuple[TIndexes[4]] ]
        :
        TTuple extends [ unknown, unknown, unknown, unknown ]
            ? [ TTuple[TIndexes[0]], TTuple[TIndexes[1]], TTuple[TIndexes[2]], TTuple[TIndexes[3]] ]
            :
            TTuple extends [ unknown, unknown, unknown ]
                ? [ TTuple[TIndexes[0]], TTuple[TIndexes[1]], TTuple[TIndexes[2]] ]
                :
                TTuple extends [ unknown, unknown ]
                    ? [ TTuple[TIndexes[0]], TTuple[TIndexes[1]] ]
                    :
                    TTuple extends [ unknown ]
                        ? [ TTuple[TIndexes[0]] ]
                        :
                        never


namespace Tuple {

}



export default Tuple
