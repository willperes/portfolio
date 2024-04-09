import { render } from "@testing-library/react";
import { formatRichText } from ".";
import { RichText } from "@/types/RichText";

const mockTextClassNames = "text-secondary responsive-text-sm";

const mockParagraphRichText: RichText = {
  type: RichText.Type.Paragraph,
  content: "This is just a simple paragraph...",
};

const mockUnorderedListRichText: RichText = {
  type: RichText.Type.UnorderedList,
  content: [
    "This is the first item in the list",
    "This is the second item in the list",
    "This is the third item in the list",
  ],
};

describe("@/utils/formatRichText", () => {
  it("should format the paragraph rich text", () => {
    const { getByText } = render(
      <>{formatRichText(mockParagraphRichText, mockTextClassNames, 0)}</>
    );

    const element = getByText(mockParagraphRichText.content);
    expect(element).toBeTruthy();

    const elementNodeName = element.nodeName.toLowerCase();
    expect(elementNodeName).toBe("p");

    const elementClassNames = element.className;
    expect(elementClassNames).toBe(mockTextClassNames);
  });

  it("should format the unordered list rich text", () => {
    const { getByTestId } = render(
      <>{formatRichText(mockUnorderedListRichText, mockTextClassNames, 0)}</>
    );

    const element = getByTestId("rich-text-ul");
    expect(element).toBeTruthy();

    expect(element.childElementCount).toBe(3);

    const elementClassNames = element.className;
    expect(elementClassNames.includes(mockTextClassNames)).toBeTruthy();

    /*
        Iterate over the children elements of the unordered list to assert that the elements are list items (<li>)
        and that it's text content matches the rich text content.
    */
    for (let i = 0; i < 3; i++) {
      const child = element.children[i];

      const childrenNodeName = child.nodeName.toLowerCase();
      expect(childrenNodeName).toBe("li");

      expect(child.textContent).toBe(mockUnorderedListRichText.content[i]);
    }
  });
});
