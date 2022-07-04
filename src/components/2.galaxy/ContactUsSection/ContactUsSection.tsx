import { GridContainer } from "@/components/4.planets/GridContainer"
import { Component } from "@/types"

export interface Props extends Component {}

export function ContactUsSection({
  testId = `contact-us-section`,
  className = ``,
}: Props) {
  return (
    <GridContainer className={className} data-testid={testId}>
      contact us section
    </GridContainer>
  )
}
