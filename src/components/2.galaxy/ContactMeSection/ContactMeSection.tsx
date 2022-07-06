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
    <article
      className="py-8 -mx-4 bg-gray-600"
      data-testid={testId}
      id={testId}
    >
      <GridContainer className={`p-4 xxl:p-0 ${className}`}>
        <Heading theme="white" size="small">
          Get in <strong>contact</strong>
        </Heading>
        <Heading className="text-3xl md:text-5xl" theme="white">
          <ClickToCopy>iama@reallycooldev.tech</ClickToCopy>
        </Heading>
      </GridContainer>
    </article>
  )
}
