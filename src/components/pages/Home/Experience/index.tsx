import { professionalExperiences } from "../../../../data/professionalExperiences";
import { ExperienceEntry } from "./ExperienceEntry";

export const Experience: React.FC = () => {
  return (
    <section
      id={"experience"}
      className={"flex flex-col justify-center items-center min-w-full"}
    >
      <h1 className={"text-section-title mb-8 sm:mb-12"}>
        PROFESSIONAL EXPERIENCE
      </h1>

      {professionalExperiences.map((experience, index) => (
        <ExperienceEntry key={index} experience={experience} index={index} />
      ))}
    </section>
  );
};
