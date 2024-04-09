import { fireEvent, render } from "@testing-library/react";
import { Header } from ".";
import { handleRedirectToMail } from "@/utils/handleRedirectToMail";

jest.mock("@/utils/handleRedirectToMail");

describe("@/components/shared/Header", () => {
  it("should display the contact button and call the redirect to mail function", () => {
    const { getByText } = render(<Header />);

    const button = getByText("Contact");
    expect(button).toBeTruthy();

    fireEvent.click(button);
    expect(handleRedirectToMail).toHaveBeenCalled();
  });
});
