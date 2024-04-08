import { handleRedirectToMail } from "."
import { handleOpenLink } from "../handleOpenLink"

jest.mock("../handleOpenLink")

describe("@/utils/handleRedirectToMail", () => {
    it("should call handleOpenLink with the correct email url", () => {
        jest.spyOn(window, "open").mockImplementationOnce(jest.fn());

        handleRedirectToMail()

        expect(handleOpenLink).toHaveBeenCalledWith("mailto:will.peres@outlook.com")
    })
})