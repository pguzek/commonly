import floor from "./floor"



describe(`function floor(precision = 0, number)`, () => {
    const number = 0.345

    context(`precision is not defined`, () => {
        it(`should round the number up to a precision`, () => {
            expect(floor(0, number))
                .toEqual(0)
        })
    })

    context(`precision is set to 1`, () => {
        it(`should round the number up to a precision`, () => {
            expect(floor(1, number))
                .toEqual(0.3)
        })
    })

    context(`precision is set to 2`, () => {
        it(`should round the number up to a precision`, () => {
            expect(floor(2, number))
                .toEqual(0.34)
        })
    })
})
