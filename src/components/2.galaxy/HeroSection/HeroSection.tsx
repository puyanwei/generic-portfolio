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
      Hi, I'm developer. I make websites and apps with a focus on function,
      speed and performance
      <div>
        <Button>Check out my work</Button>
      </div>
    </GridContainer>
  )
}
