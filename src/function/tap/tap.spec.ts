import tap from "./tap"


describe("test", () => {
    it("x", () => {
        expect(tap(() => null)(null))
            .toBe(null)
    })
})
