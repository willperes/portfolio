import { RichText } from "@/types/RichText";
import { formatRichText } from "@/utils/formatRichText";

type Props = {
  description: RichText[];
};

export const Description: React.FC<Props> = ({ description }) => {
  function handleRichText(textBlocks: RichText[]) {
    const elements = textBlocks.map((text, index) => {
      const isFirst = index === 0;
      const marginClassNames = isFirst ? "mt-4 sm:mt-6" : "mt-1 sm:mt-2";
      const classNames = `text-secondary responsive-text-xs ${marginClassNames}`;
      return formatRichText(text, classNames);
    });
    return elements;
  }

  return handleRichText(description);
};
