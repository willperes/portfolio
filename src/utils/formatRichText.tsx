import { RichText } from "@/types/RichText";

export function formatRichText(
  text: RichText,
  textClassNames: string
): JSX.Element {
  switch (text.type) {
    case RichText.Type.Paragraph: {
      return <p className={textClassNames}>{text.content}</p>;
    }

    case RichText.Type.UnorderedList: {
      const unorderedListItems = text.content.map((item, index) => (
        <li key={index}>{item}</li>
      ));

      return (
        <ul className={`list-disc ml-4 ${textClassNames}`}>
          {unorderedListItems}
        </ul>
      );
    }

    default: {
      return <></>;
    }
  }
}
