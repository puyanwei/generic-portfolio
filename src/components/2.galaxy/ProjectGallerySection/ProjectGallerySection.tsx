import { ProjectCard } from "@/components/3.solarSystem/ProjectCard"
import { GridContainer } from "@/components/4.planets/GridContainer"
import { Component } from "@/types"

export interface Props extends Component {}

export function ProjectGallerySection({
  testId = `project-gallery-section`,
  className = ``,
}: Props) {
  return (
    <GridContainer
      className={className}
      data-testid={testId}
      id={testId}
      columns={2}
      gap="small"
    >
      <ProjectCard
        src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        alt="To do app"
        caption="My amazing to do app"
      />
      <ProjectCard
        src="https://images.unsplash.com/photo-1534794048419-48e110dca88e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        alt="Weather app"
        caption="My stunning weather app"
      />
      <ProjectCard
        src="https://images.unsplash.com/photo-1612010167108-3e6b327405f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        alt="Stock app"
        caption="An incredible stocks tracker"
      />
      <ProjectCard
        src="https://images.unsplash.com/photo-1592329347810-258afdd206bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        alt="Instagram clone"
        caption="The best instagram clone"
      />
    </GridContainer>
  )
}
