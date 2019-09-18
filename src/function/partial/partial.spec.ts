import BinaryFunction from "../../type/BinaryFunction"
import QuaternaryFunction from "../../type/QuaternaryFunction"
import QuinaryFunction from "../../type/QuinaryFunction"
import TernaryFunction from "../../type/TernaryFunction"
import UnaryFunction from "../../type/UnaryFunction"
import partial from "./partial"



describe("function partial(f, ...applied)", () => {
    context("f is an unary function", () => {
        const f: UnaryFunction<number, 0> = (a) => a

        context("applied is one argument", () => {
            const subject = partial(f, 0)

            it("should return the same result as an f function", () => {
                expect(subject())
                    .toEqual(f(0))
            })
        })

        context("placeholder is applied", () => {
            const subject = partial(f, undefined)

            it("should return the same result as an f function", () => {
                expect(subject(0))
                    .toEqual(f(0))
            })
        })
    })

    context("f is a binary function", () => {
        const f: BinaryFunction<number, 0, "1"> = (a, b) => a + parseInt(b, 10)

        context("where one argument is applied", () => {
            const subject = partial(f, 0)

            it("should return the same result as an f function", () => {
                expect(subject("1"))
                    .toEqual(f(0, "1"))
            })
        })

        context("where two arguments are applied", () => {
            const subject = partial(f, 0, "1")

            it("should return the same result as an f function", () => {
                expect(subject())
                    .toEqual(f(0, "1"))
            })
        })

        context("placeholder is applied", () => {
            it("should return the same result as an f function", () => {
                const subject = partial(f, undefined, "1")
                expect(subject(0))
                    .toEqual(f(0, "1"))
            })

            it("should return the same result as an f function", () => {
                const subject = partial(f, 0, undefined)
                expect(subject("1"))
                    .toEqual(f(0, "1"))
            })
        })
    })

    context("f is a ternary function", () => {
        const f: TernaryFunction<number, 0, "1", 1> = (a, b, c) => a + parseInt(b, 10) + c

        context("where one argument is applied", () => {
            const subject = partial(f, 0)

            it("should return the same result as an f function", () => {
                expect(subject("1", 1))
                    .toEqual(f(0, "1", 1))
            })
        })

        context("where two arguments are applied", () => {
            const subject = partial(f, 0, 1)

            it("should return the same result as an f function", () => {
                expect(subject(1))
                    .toEqual(f(0, "1", 1))
            })
        })

        context("where three arguments are applied", () => {
            const subject = partial(f, 0, 1, 1)

            it("should return the same result as an f function", () => {
                expect(subject())
                    .toEqual(f(0, "1", 1))
            })
        })

        context("placeholder is applied", () => {
            it("should return the same result as an f function", () => {
                const subject = partial(f, undefined, "1", 1)
                expect(subject(0))
                    .toEqual(f(0, "1", 1))
            })

            it("should return the same result as an f function", () => {
                const subject = partial(f, 0, undefined, 1)
                expect(subject("1"))
                    .toEqual(f(0, "1", 1))
            })

            it("should return the same result as an f function", () => {
                const subject = partial(f, 0, "1", undefined)
                expect(subject(1))
                    .toEqual(f(0, "1", 1))
            })
        })
    })

    context("f is a quaternary function", () => {
        const f: QuaternaryFunction<number, 0, "1", 1, 2> = (a, b, c, d) => a + parseInt(b, 10) + c + d

        context("where one argument is applied", () => {
            const subject = partial(f, 0)

            it("should return the same result as an f function", () => {
                expect(subject("1", 1, 2))
                    .toEqual(f(0, "1", 1, 2))
            })
        })

        context("where two arguments are applied", () => {
            const subject = partial(f, 0, 1)

            it("should return the same result as an f function", () => {
                expect(subject(1, 2))
                    .toEqual(f(0, "1", 1, 2))
            })
        })

        context("where three arguments are applied", () => {
            const subject = partial(f, 0, 1, 1)

            it("should return the same result as an f function", () => {
                expect(subject(2))
                    .toEqual(f(0, "1", 1, 2))
            })
        })

        context("where four arguments are applied", () => {
            const subject = partial(f, 0, "1", 1, 2)

            it("should return the same result as an f function", () => {
                expect(subject())
                    .toEqual(f(0, "1", 1, 2))
            })
        })

        context("placeholder is applied", () => {
            it("should return the same result as an f function", () => {
                const subject = partial(f, undefined, "1", 1, 2)
                expect(subject(0))
                    .toEqual(f(0, "1", 1, 2))
            })

            it("should return the same result as an f function", () => {
                const subject = partial(f, 0, undefined, 1, 2)
                expect(subject("1"))
                    .toEqual(f(0, "1", 1, 2))
            })

            it("should return the same result as an f function", () => {
                const subject = partial(f, 0, "1", undefined, 2)
                expect(subject(1))
                    .toEqual(f(0, "1", 1, 2))
            })

            it("should return the same result as an f function", () => {
                const subject = partial(f, 0, "1", 1, undefined)
                expect(subject(2))
                    .toEqual(f(0, "1", 1, 2))
            })
        })
    })

    context("f is a quinary function", () => {
        const f: QuinaryFunction<number, 0, "1", 1, 2, 3> = (a, b, c, d, e) => a + parseInt(b, 10) + c + d + e

        context("where one argument is applied", () => {
            const subject = partial(f, 0)

            it("should return the same result as an f function", () => {
                expect(subject("1", 1, 2, 3))
                    .toEqual(f(0, "1", 1, 2, 3))
            })
        })

        context("where two arguments are applied", () => {
            const subject = partial(f, 0, 1)

            it("should return the same result as an f function", () => {
                expect(subject(1, 2, 3))
                    .toEqual(f(0, "1", 1, 2, 3))
            })
        })

        context("where three arguments are applied", () => {
            const subject = partial(f, 0, 1, 1)

            it("should return the same result as an f function", () => {
                expect(subject(2, 3))
                    .toEqual(f(0, "1", 1, 2, 3))
            })
        })

        context("where four arguments are applied", () => {
            const subject = partial(f, 0, 1, 1, 2)

            it("should return the same result as an f function", () => {
                expect(subject(3))
                    .toEqual(f(0, "1", 1, 2, 3))
            })
        })

        context("where five arguments are applied", () => {
            const subject = partial(f, 0, 1, 1, 2, 3)

            it("should return the same result as an f function", () => {
                expect(subject())
                    .toEqual(f(0, "1", 1, 2, 3))
            })
        })

        context("placeholder is applied", () => {
            it("should return the same result as an f function", () => {
                const subject = partial(f, undefined, "1", 1, 2, 3)
                expect(subject(0))
                    .toEqual(f(0, "1", 1, 2, 3))
            })

            it("should return the same result as an f function", () => {
                const subject = partial(f, 0, undefined, 1, 2, 3)
                expect(subject("1"))
                    .toEqual(f(0, "1", 1, 2, 3))
            })

            it("should return the same result as an f function", () => {
                const subject = partial(f, 0, "1", undefined, 2, 3)
                expect(subject(1))
                    .toEqual(f(0, "1", 1, 2, 3))
            })

            it("should return the same result as an f function", () => {
                const subject = partial(f, 0, "1", 1, undefined, 3)
                expect(subject(2))
                    .toEqual(f(0, "1", 1, 2, 3))
            })

            it("should return the same result as an f function", () => {
                const subject = partial(f, 0, "1", 1, 2, undefined)
                expect(subject(3))
                    .toEqual(f(0, "1", 1, 2, 3))
            })
        })
    })
})
