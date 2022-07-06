import { ClickToCopy } from "@/components/4.planets/ClickToCopy"
import { GridContainer } from "@/components/4.planets/GridContainer"
import { Heading } from "@/components/4.planets/Heading"
import { Component } from "@/types"

export interface Props extends Component {}

export function ContactMeSection({
  testId = `contact-me-section`,
  className = ``,
}: Props) {
  return (
    <div className="py-8 bg-gray-600">
      <GridContainer className={className} data-testid={testId} id={testId}>
        <Heading theme="white" size="small">
          Get in <strong>contact</strong>
        </Heading>
        <Heading theme="white" size="x-large">
          <ClickToCopy>iama@reallycooldev.tech</ClickToCopy>
        </Heading>
      </GridContainer>
    </div>
  )
}
