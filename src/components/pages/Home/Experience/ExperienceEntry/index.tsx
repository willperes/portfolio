import { RichText } from "@/types/RichText";
import { WorkExperience } from "@/types/WorkExperience";
import { formatThreeLetterMonthAndYear } from "@/utils/formatDate";
import Image from "next/image";

type Props = {
  data: WorkExperience;
  index: number;
};

export const ExperienceEntry: React.FC<Props> = ({ data, index }) => {
  function handleRichText(textBlocks: RichText[]) {
    const formatTextToElement = (text: RichText, index: number) => {
      let baseTextStyle = "text-secondary responsive-text-xs";

      const isFirst = index === 0;
      baseTextStyle += isFirst ? " mt-4 sm:mt-6" : " mt-1 sm:mt-2";

      switch (text.type) {
        case RichText.Type.Paragraph: {
          return <p className={baseTextStyle}>{text.content}</p>;
        }

        case RichText.Type.UnorderedList: {
          const unorderedListItems = text.content.map((item, index) => (
            <li key={index}>{item}</li>
          ));

          return (
            <ul className={`list-disc ml-4 ${baseTextStyle}`}>
              {unorderedListItems}
            </ul>
          );
        }

        default: {
          return null;
        }
      }
    };

    return textBlocks.map(formatTextToElement);
  }

  function formatStartAndEndDate(): string {
    const startDate = formatThreeLetterMonthAndYear(data.startDate);

    if (data.endDate) {
      const endDate = formatThreeLetterMonthAndYear(data.endDate);
      return `${startDate} - ${endDate}`;
    }

    return `${startDate} to present`;
  }

  return (
    <div className={`flex flex-col w-full${index !== 0 && " mt-12"}`}>
      <div className={"flex flex-row items-center"}>
        <div className={"flex flex-row items-center flex-1"}>
          <div className={"flex-none relative h-8 w-8 mr-4"}>
            <Image
              src={data.companyLogo}
              alt={`${data.companyName} logo`}
              fill
              className={"rounded"}
            />
          </div>

          <div
            className={
              "flex flex-col justify-start md:flex-row md:justify-between md:items-center md:flex-1"
            }
          >
            <h2
              className={
                "text-primary font-poppins font-bold text-base sm:text-xl"
              }
            >
              {data.position}{" "}
              <span className={"text-secondary font-normal"}>
                at {data.companyName}
              </span>
            </h2>

            <span
              aria-label={"Start and end dates of the work position"}
              className={
                "flex-none text-tertiary font-normal responsive-text-xs"
              }
            >
              {formatStartAndEndDate()}
            </span>
          </div>
        </div>
      </div>

      {handleRichText(data.description)}

      <h3
        className={"text-primary font-medium responsive-text-xs mt-2 sm:mt-4"}
      >
        Key Technologies and Tools:{" "}
        <span className={"font-normal text-secondary"}>
          {data.keywords.join(", ").trimEnd()}.
        </span>
      </h3>
    </div>
  );
};
