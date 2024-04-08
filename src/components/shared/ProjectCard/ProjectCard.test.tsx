import { render, waitFor } from "@testing-library/react";
import { ProjectCard } from ".";
import { DevProject } from "@/types/DevProject";
import { mock } from "node:test";

const mockProject: DevProject = {
  title: "Mobile Engineer",
  description: "Lorem ipsum dolor sit amet, consectet",
  imageURL: "https://i.imgur.com/adiSLgJ.jpeg",
  projectURL: "https://github.com/willperes",
  keywords: ["React Native", "UIKit", "TDD", "Jest", "XCTest"],
};

describe("@/components/shared/ProjectCard", () => {
  it("should render the project title and description", () => {
    const { getByText } = render(<ProjectCard project={mockProject} />);

    const titleElement = getByText(mockProject.title);
    const descriptionElement = getByText(mockProject.description);

    expect(titleElement).toBeTruthy();
    expect(descriptionElement).toBeTruthy();
  });

  it("should display the image with the imageURL and have the project title as alt", async () => {
    const { getByTestId } = render(<ProjectCard project={mockProject} />);

    const imageElement = getByTestId("project-card-image");

    const imageElementSrc = imageElement.getAttribute("src");

    expect(
      imageElementSrc?.includes(encodeURIComponent(mockProject.imageURL))
    ).toBeTruthy();
    expect(imageElement).toHaveAttribute("alt", mockProject.title);
  });
});
