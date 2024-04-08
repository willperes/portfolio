import { devProjects } from "@/data/devProjects";
import { ProjectCard } from "../../../shared/ProjectCard";
import Button, { ButtonSize } from "@/components/shared/Button";
import { useRouter } from "next/navigation";

export const Projects: React.FC = () => {
  const router = useRouter();

  function handleRedirectionToProjectsPage(): void {
    router.push("/projects");
  }

  return (
    <section
      id={"projects"}
      className={"flex flex-col justify-center items-center"}
    >
      <h1 className={"text-section-title mb-8 sm:mb-12"}>PROJECTS</h1>

      <p className={"text-secondary text-center responsive-text-sm"}>
        Below you will find some of the projects I have worked on in the past
        few years as a developer.
      </p>

      <div className={"flex flex-col gap-8 mt-4"}>
        {devProjects.slice(0, 3).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {devProjects.length > 3 ? (
        <div className={"mt-6"}>
          <Button
            size={ButtonSize.MEDIUM}
            onClick={handleRedirectionToProjectsPage}
          >
            View all projects
          </Button>
        </div>
      ) : null}
    </section>
  );
};
