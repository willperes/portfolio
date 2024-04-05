import { WorkExperience } from "@/types/WorkExperience";
import Image from "next/image";
import { Description } from "./Description";
import { CompanyInformation } from "./CompanyInformation";

type Props = {
  workExperience: WorkExperience;
  index: number;
};

export const ExperienceEntry: React.FC<Props> = ({ workExperience, index }) => {
  return (
    <div className={`flex flex-col w-full${index !== 0 && " mt-12"}`}>
      <CompanyInformation workExperience={workExperience} />
      <Description description={workExperience.description} />

      <h3
        className={"text-primary font-medium responsive-text-xs mt-2 sm:mt-4"}
      >
        Key Technologies and Tools:{" "}
        <span className={"font-normal text-secondary"}>
          {workExperience.keywords.join(", ").trimEnd()}.
        </span>
      </h3>
    </div>
  );
};
