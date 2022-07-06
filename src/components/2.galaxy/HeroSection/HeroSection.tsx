import { Button } from "@/components/4.planets/Button"
import { GridContainer } from "@/components/4.planets/GridContainer"
import { Heading } from "@/components/4.planets/Heading"
import { Component } from "@/types"

export interface Props extends Component {}

export function HeroSection({
  testId = `hero-section`,
  className = ``,
}: Props) {
  return (
    <GridContainer className={className} data-testid={testId} id={testId}>
      <Heading size="x-large">
        Hi, I'm a 2x generic developer. Be impressed as I make
        <strong> websites and apps</strong> and the most typical projects
      </Heading>
      <a href="https://bit.ly/3P9SQGw">
        <Button>Check out my work</Button>
      </a>
    </GridContainer>
  )
}
