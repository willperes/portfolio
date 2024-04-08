import { handleOpenLink } from "."

describe("@/utils/handleOpenLink", () => {
    it("should call window.open with the url and _blank", () => {
        jest.spyOn(window, "open").mockImplementationOnce(jest.fn())

        handleOpenLink("https://github.com/willperes")

        expect(window.open).toHaveBeenCalledWith("https://github.com/willperes", "_blank")
    })
})