import { ProjectCard } from "@/components/3.solarSystem/ProjectCard"
import { GridContainer } from "@/components/4.planets/GridContainer"
import { Heading } from "@/components/4.planets/Heading"
import { Link } from "@/components/4.planets/Link"
import { Component } from "@/types"
import { projectGalleryData } from "./ProjectGallerySection.mockProps"

export interface Props extends Component {}

export function ProjectGallerySection({
  testId = `project-gallery-section`,
  className = ``,
}: Props) {
  return (
    <GridContainer
      className={`grid-cols-1 md:grid-cols-2 ${className}`}
      data-testid={testId}
      id={testId}
      gap="small"
    >
      <Heading className="my-8 md:col-start-1 md:col-end-3" size="x-large">
        My excellent <strong>projects</strong>
      </Heading>
      {projectGalleryData.map(({ src, alt, caption }) => (
        <ProjectCard src={src} alt={alt} caption={caption} key={alt} />
      ))}

      <Link
        className="text-gray-600 justify-self-end md:col-start-2"
        href="https://bit.ly/3OTP6Jp"
        hasIcon
      >
        view more
      </Link>
    </GridContainer>
  )
}
