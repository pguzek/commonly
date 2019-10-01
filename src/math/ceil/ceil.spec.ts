import ceil from "./ceil"



describe(`function ceil(precision = 0, number)`, () => {
    const number = 0.345

    context(`precision is not defined`, () => {
        it(`should round the number up to a precision`, () => {
            expect(ceil(0, number))
                .toEqual(1)
        })
    })

    context(`precision is set to 1`, () => {
        it(`should round the number up to a precision`, () => {
            expect(ceil(1, number))
                .toEqual(0.4)
        })
    })

    context(`precision is set to 2`, () => {
        it(`should round the number up to a precision`, () => {
            expect(ceil(2, number))
                .toEqual(0.35)
        })
    })
})
