import { ProfessionalExperience } from "@/types/ProfessionalExperience";
import Image from "next/image";
import { Description } from "./Description";
import { CompanyInformation } from "./CompanyInformation";

type Props = {
  experience: ProfessionalExperience;
  index: number;
};

export const ExperienceEntry: React.FC<Props> = ({ experience, index }) => {
  return (
    <div className={`flex flex-col w-full${index !== 0 && " mt-12"}`}>
      <CompanyInformation experience={experience} />
      <Description description={experience.description} />

      <h3
        className={"text-primary font-medium responsive-text-xs mt-2 sm:mt-4"}
      >
        Key Technologies and Tools:{" "}
        <span className={"font-normal text-secondary"}>
          {experience.keywords.join(", ").trimEnd()}.
        </span>
      </h3>
    </div>
  );
};
