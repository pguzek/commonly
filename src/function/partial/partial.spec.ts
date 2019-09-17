import BinaryFunction from "../../type/BinaryFunction"
import QuaternaryFunction from "../../type/QuaternaryFunction"
import QuinaryFunction from "../../type/QuinaryFunction"
import TernaryFunction from "../../type/TernaryFunction"
import UnaryFunction from "../../type/UnaryFunction"
import partial from "./partial"



describe("function partial(f, ...applied)", () => {
    context("f is an unary function", () => {
        const f: UnaryFunction<number, number> = (a) => a

        context("applied is one argument", () => {
            const subject = partial(f, 1)

            it("should return the same result as an f function", () => {
                expect(subject())
                    .toEqual(f(1))
            })
        })
    })

    context("f is a binary function", () => {
        const f: BinaryFunction<number, number, number> = (a, b) => a + b

        context("where one argument is applied", () => {
            const subject = partial(f, 1)

            it("should return the same result as an f function", () => {
                expect(subject(2))
                    .toEqual(f(1, 2))
            })
        })

        context("where two arguments are applied", () => {
            const subject = partial(f, 1, 2)

            it("should return the same result as an f function", () => {
                expect(subject())
                    .toEqual(f(1, 2))
            })
        })
    })

    context("f is a ternary function", () => {
        const f: TernaryFunction<number, number, number, number> = (a, b, c) => a + b + c

        context("where one argument is applied", () => {
            const subject = partial(f, 1)

            it("should return the same result as an f function", () => {
                expect(subject(2, 3))
                    .toEqual(f(1, 2, 3))
            })
        })

        context("where two arguments are applied", () => {
            const subject = partial(f, 1, 2)

            it("should return the same result as an f function", () => {
                expect(subject(3))
                    .toEqual(f(1, 2, 3))
            })
        })

        context("where three arguments are applied", () => {
            const subject = partial(f, 1, 2, 3)

            it("should return the same result as an f function", () => {
                expect(subject())
                    .toEqual(f(1, 2, 3))
            })
        })
    })

    context("f is a quaternary function", () => {
        const f: QuaternaryFunction<number, number, number, number, number> = (a, b, c, d) => a + b + c + d

        context("where one argument is applied", () => {
            const subject = partial(f, 1)

            it("should return the same result as an f function", () => {
                expect(subject(2, 3, 4))
                    .toEqual(f(1, 2, 3, 4))
            })
        })

        context("where two arguments are applied", () => {
            const subject = partial(f, 1, 2)

            it("should return the same result as an f function", () => {
                expect(subject(3, 4))
                    .toEqual(f(1, 2, 3, 4))
            })
        })

        context("where three arguments are applied", () => {
            const subject = partial(f, 1, 2, 3)

            it("should return the same result as an f function", () => {
                expect(subject(4))
                    .toEqual(f(1, 2, 3, 4))
            })
        })

        context("where four arguments are applied", () => {
            const subject = partial(f, 1, 2, 3, 4)

            it("should return the same result as an f function", () => {
                expect(subject())
                    .toEqual(f(1, 2, 3, 4))
            })
        })
    })

    context("f is a quinary function", () => {
        const f: QuinaryFunction<number, number, number, number, number, number> = (a, b, c, d, e) => a + b + c + d + e

        context("where one argument is applied", () => {
            const subject = partial(f, 1)

            it("should return the same result as an f function", () => {
                expect(subject(2, 3, 4, 5))
                    .toEqual(f(1, 2, 3, 4, 5))
            })
        })

        context("where two arguments are applied", () => {
            const subject = partial(f, 1, 2)

            it("should return the same result as an f function", () => {
                expect(subject(3, 4, 5))
                    .toEqual(f(1, 2, 3, 4, 5))
            })
        })

        context("where three arguments are applied", () => {
            const subject = partial(f, 1, 2, 3)

            it("should return the same result as an f function", () => {
                expect(subject(4, 5))
                    .toEqual(f(1, 2, 3, 4, 5))
            })
        })

        context("where four arguments are applied", () => {
            const subject = partial(f, 1, 2, 3, 4)

            it("should return the same result as an f function", () => {
                expect(subject(5))
                    .toEqual(f(1, 2, 3, 4, 5))
            })
        })

        context("where five arguments are applied", () => {
            const subject = partial(f, 1, 2, 3, 4, 5)

            it("should return the same result as an f function", () => {
                expect(subject())
                    .toEqual(f(1, 2, 3, 4, 5))
            })
        })
    })
})
