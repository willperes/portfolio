import { Header } from "@/components/Header";
import { Footer } from "@/components/shared/Footer";
import { Head } from "@/components/shared/Head";
import { devProjects } from "../../data/devProjects";
import { ProjectCard } from "@/components/shared/ProjectCard";

export default function Projects() {
  return (
    <>
      <Head
        title={"Projects"}
        description={
          "Check out the projects that I have developed throughout my carreer as a developer"
        }
      />
      <Header />
      <main className={"flex justify-center header-padding"}>
        <div
          className={
            "content-max-width content-padding content-margin flex flex-col"
          }
        >
          <h1
            className={
              "text-primary responsive-text-3xl font-bold mb-8 sm:mb-10"
            }
          >
            Projects
          </h1>

          <div className={"flex flex-col gap-8"}>
            {devProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
