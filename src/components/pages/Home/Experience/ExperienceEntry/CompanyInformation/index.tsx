import { ProfessionalExperience } from "@/types/ProfessionalExperience";
import { dateUtils } from "@/utils/dateUtils";
import { formatThreeLetterMonthAndYear } from "@/utils/formatThreeLetterMonthAndYear";
import { handleOpenLink } from "@/utils/handleOpenLink";
import Image from "next/image";

type Props = {
  experience: ProfessionalExperience;
};

export const CompanyInformation: React.FC<Props> = ({ experience }) => {
  function formatStartAndEndDate(): string {
    const timeOnExperienceText = dateUtils.getYearsAndMonthFromDates(
      experience.startDate,
      experience.endDate
    );
    const startDate = formatThreeLetterMonthAndYear(experience.startDate);

    if (experience.endDate) {
      const endDate = formatThreeLetterMonthAndYear(experience.endDate);
      return `${startDate} - ${endDate} (${timeOnExperienceText})`;
    }

    return `${startDate} to present (${timeOnExperienceText})`;
  }

  return (
    <div className={"flex flex-row items-center"}>
      <div className={"flex flex-row items-center flex-1"}>
        <div className={"flex-none relative h-8 w-8 mr-4"}>
          <Image
            src={experience.companyLogo}
            alt={`${experience.companyName} logo`}
            fill
            sizes={"32px"}
            className={"rounded cursor-pointer"}
            onClick={() => handleOpenLink(experience.linkedinURL)}
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
            {experience.position}{" "}
            <span className={"text-secondary font-normal"}>
              at {experience.companyName}
            </span>
          </h2>

          <span
            aria-label={"Start and end dates of the work position"}
            className={"flex-none text-tertiary font-normal responsive-text-xs"}
          >
            {formatStartAndEndDate()}
          </span>
        </div>
      </div>
    </div>
  );
};
