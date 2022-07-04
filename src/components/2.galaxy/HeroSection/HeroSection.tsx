import { Button } from "@/components/4.planets/Button"
import { GridContainer } from "@/components/4.planets/GridContainer"
import { Component } from "@/types"

export interface Props extends Component {}

export function HeroSection({
  testId = `hero-section`,
  className = ``,
}: Props) {
  return (
    <GridContainer className={className} data-testid={testId}>
      <p className="text-5xl leading-relaxed">
        Hi, I'm developer. I make <strong>websites and apps</strong> with a
        focus on function, speed and performance
      </p>
      <Button>Check out my work</Button>
    </GridContainer>
  )
}
