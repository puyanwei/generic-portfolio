import { GridContainer } from "@/components/4.planets/GridContainer"
import { Heading } from "@/components/4.planets/Heading"
import { Component } from "@/types"

export interface Props extends Component {}

export function ContactMeSection({
  testId = `contact-me-section`,
  className = ``,
}: Props) {
  return (
    <div className="bg-gray-600 py-8">
      <GridContainer className={className} data-testid={testId}>
        <Heading size="medium">
          Get in <strong>contact</strong>
        </Heading>
        <p>hi@reallycooldev.tech</p>
      </GridContainer>
    </div>
  )
}
