import Button, { ButtonSize, ButtonVariant } from "@/components/shared/Button";
import { DevProject } from "@/types/DevProject";
import Image from "next/image";

type Props = {
  project: DevProject;
};

export const ProjectCard: React.FC<Props> = ({ project }) => {
  function handleOpenProjectLink(): void {
    window.open(project.projectURL, "_blank");
  }

  return (
    <div className={"flex flex-col sm:flex-row"}>
      <div
        className={
          "relative aspect-video min-[425px]:h-50 sm:h-36 w-full sm:w-60 flex-none"
        }
      >
        <Image
          alt={project.title}
          src={project.imageURL}
          fill
          objectFit={"cover"}
          className={"rounded"}
        />
      </div>

      <div className={"flex flex-col items-start mt-4 sm:mt-0 sm:ml-4"}>
        <h1
          className={"text-primary font-semibold responsive-text-base truncate"}
        >
          {project.title}
        </h1>

        <p className={"text-tertiary responsive-text-xs line-clamp-2 mt-1"}>
          {project.description}
        </p>

        <div className={"flex flex-col sm:flex-row sm:items-start"}>
          <p className={"text-secondary font-medium responsive-text-xs mt-2"}>
            Key Technologies and Tools:{" "}
            <span className={"text-tertiary"}>{`${project.keywords.join(
              ", "
            )}.`}</span>
          </p>

          <div className={"mt-4 flex-none"}>
            <Button
              variant={ButtonVariant.SECONDARY}
              size={ButtonSize.SMALL}
              onClick={handleOpenProjectLink}
            >
              Check more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
