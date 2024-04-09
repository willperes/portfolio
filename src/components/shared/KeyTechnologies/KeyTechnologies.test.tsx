import { render } from "@testing-library/react";
import { KeyTechnologies } from ".";

const mockKeywords = ["React Native", "SwiftUI", "UIKit", "Flutter"];

describe("@/components/shared/KeyTechnologies", () => {
  it("should render the keywords that were passed as props", () => {
    const { getByText } = render(<KeyTechnologies keywords={mockKeywords} />);

    const expectedContent = `${mockKeywords.join(", ")}.`;
    expect(getByText(expectedContent)).toBeTruthy();
  });
});
