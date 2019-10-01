import round from "./round"



describe(`function round(precision = 0, number)`, () => {
    const number = 0.345

    context(`precision is not defined`, () => {
        it(`should round the number up to a precision`, () => {
            expect(round(0, number))
                .toEqual(0)
        })
    })

    context(`precision is set to 1`, () => {
        it(`should round the number up to a precision`, () => {
            expect(round(1, number))
                .toEqual(0.3)
        })
    })

    context(`precision is set to 2`, () => {
        it(`should round the number up to a precision`, () => {
            expect(round(2, number))
                .toEqual(0.35)
        })
    })
})
