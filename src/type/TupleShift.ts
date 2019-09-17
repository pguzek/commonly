type TupleShift<TTuple extends unknown[]> =
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


export default TupleShift
