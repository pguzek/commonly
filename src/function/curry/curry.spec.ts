import BinaryFunction from "../../type/BinaryFunction"
import QuaternaryFunction from "../../type/QuaternaryFunction"
import QuinaryFunction from "../../type/QuinaryFunction"
import TernaryFunction from "../../type/TernaryFunction"
import UnaryFunction from "../../type/UnaryFunction"
import curry from "./curry"



describe("function curry(f)", () => {
    context("f is a unary function", () => {
        const f: UnaryFunction<number, number> = (a) => a

        context("is not curried", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(1))
                    .toEqual(f(1))
            })
        })
    })

    context("f is a binary function", () => {
        const f: BinaryFunction<number, number, number> = (a, b) => a + b

        context("is not curried", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(1, 2))
                    .toEqual(f(1, 2))
            })
        })

        context("is curried once", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(1)(2))
                    .toEqual(f(1, 2))
            })
        })
    })

    context("f is a ternary function", () => {
        const f: TernaryFunction<number, number, number, number> = (a, b, c) => a + b + c

        context("is not curried", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(1, 2, 3))
                    .toEqual(f(1, 2, 3))
            })
        })

        context("is curried once", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(1)(2, 3))
                    .toEqual(f(1, 2, 3))
                expect(subject(1, 2)(3))
                    .toEqual(f(1, 2, 3))
            })
        })

        context("is curried twice", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(1)(2)(3))
                    .toEqual(f(1, 2, 3))
            })
        })
    })

    context("f is a quaternary function", () => {
        const f: QuaternaryFunction<number, number, number, number, number> = (a, b, c, d) => a + b + c + d

        context("is not curried", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(1, 2, 3, 4))
                    .toEqual(f(1, 2, 3, 4))
            })
        })

        context("is curried once", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(1)(2, 3, 4))
                    .toEqual(f(1, 2, 3, 4))
                expect(subject(1, 2)(3, 4))
                    .toEqual(f(1, 2, 3, 4))
                expect(subject(1, 2, 3)(4))
                    .toEqual(f(1, 2, 3, 4))
            })
        })

        context("is curried twice", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(1, 2)(3)(4))
                    .toEqual(f(1, 2, 3, 4))
                expect(subject(1)(2, 3)(4))
                    .toEqual(f(1, 2, 3, 4))
                expect(subject(1)(2)(3, 4))
                    .toEqual(f(1, 2, 3, 4))
            })
        })

        context("is curried thrice", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(1)(2)(3)(4))
                    .toEqual(f(1, 2, 3, 4))
            })
        })
    })

    context("f is a quinary function", () => {
        const f: QuinaryFunction<number, number, number, number, number, number> = (a, b, c, d, e) => a + b + c + d + e

        context("is not curried", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(1, 2, 3, 4, 5))
                    .toEqual(f(1, 2, 3, 4, 5))
            })
        })

        context("is curried once", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(1)(2, 3, 4, 5))
                    .toEqual(f(1, 2, 3, 4, 5))
                expect(subject(1, 2)(3, 4, 5))
                    .toEqual(f(1, 2, 3, 4, 5))
                expect(subject(1, 2, 3)(4, 5))
                    .toEqual(f(1, 2, 3, 4, 5))
                expect(subject(1, 2, 3, 4)(5))
                    .toEqual(f(1, 2, 3, 4, 5))
            })
        })

        context("is curried twice", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(1, 2, 3)(4)(5))
                    .toEqual(f(1, 2, 3, 4, 5))
                expect(subject(1, 2)(3, 4)(5))
                    .toEqual(f(1, 2, 3, 4, 5))
                expect(subject(1)(2, 3)(4, 5))
                    .toEqual(f(1, 2, 3, 4, 5))
                expect(subject(1)(2)(3, 4, 5))
                    .toEqual(f(1, 2, 3, 4, 5))
            })
        })

        context("is curried thrice", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(1, 2)(3)(4)(5))
                    .toEqual(f(1, 2, 3, 4, 5))
                expect(subject(1)(2, 3)(4)(5))
                    .toEqual(f(1, 2, 3, 4, 5))
                expect(subject(1)(2)(3, 4)(5))
                    .toEqual(f(1, 2, 3, 4, 5))
                expect(subject(1)(2)(3)(4, 5))
                    .toEqual(f(1, 2, 3, 4, 5))
            })
        })

        context("is curried frice", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(1)(2)(3)(4)(5))
                    .toEqual(f(1, 2, 3, 4, 5))
            })
        })
    })
})
