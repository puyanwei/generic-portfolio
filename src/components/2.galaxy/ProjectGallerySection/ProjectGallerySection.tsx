import { GridContainer } from "@/components/4.planets/GridContainer"
import { Component } from "@/types"

export interface Props extends Component {}

export function ProjectGallerySection({
  testId = `project-gallery-section`,
  className = ``,
}: Props) {
  return (
    <GridContainer className={className} data-testid={testId}>
      project gallery section
    </GridContainer>
  )
}
