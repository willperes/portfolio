import { workExperiences } from "../../../../../workExperiences";
import { ExperienceEntry } from "./ExperienceEntry";

export const Experience: React.FC = () => {
  return (
    <section
      id={"experience"}
      className={"flex flex-col justify-center items-center"}
    >
      <h1 className={"text-section-title mb-8 sm:mb-12"}>EXPERIENCE</h1>

      {workExperiences.map((experience, index) => (
        <ExperienceEntry key={index} data={experience} index={index} />
      ))}
    </section>
  );
};
