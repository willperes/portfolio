import { ProfessionalExperience } from "@/types/ProfessionalExperience";
import { Description } from "./Description";
import { CompanyInformation } from "./CompanyInformation";
import { KeyTechnologies } from "@/components/shared/KeyTechnologies";

type Props = {
  experience: ProfessionalExperience;
  index: number;
};

export const ExperienceEntry: React.FC<Props> = ({ experience, index }) => {
  return (
    <div className={`flex flex-col w-full${index !== 0 ? " mt-12" : ""}`}>
      <CompanyInformation experience={experience} />
      <Description description={experience.description} />

      <div className={"mt-2 sm:mt-4"}>
        <KeyTechnologies keywords={experience.keywords} />
      </div>
    </div>
  );
};
