import { RichText } from "@/types/RichText";

export function formatRichText(
  text: RichText,
  textClassNames: string,
  textIndex: number
): JSX.Element {
  switch (text.type) {
    case RichText.Type.Paragraph: {
      return (
        <p key={`rich-text-p-${textIndex}`} className={textClassNames}>
          {text.content}
        </p>
      );
    }

    case RichText.Type.UnorderedList: {
      const unorderedListItems = text.content.map((item, index) => (
        <li key={`rich-text-li-item-${index}`}>{item}</li>
      ));

      return (
        <ul
          key={`rich-text-ul-${textIndex}`}
          className={`list-disc ml-4 ${textClassNames}`}
        >
          {unorderedListItems}
        </ul>
      );
    }

    default: {
      return <></>;
    }
  }
}
