import { GridContainer } from "@/components/4.planets/GridContainer"
import { Heading } from "@/components/4.planets/Heading"
import { Component } from "@/types"

export interface Props extends Component {}

export function AboutMeSection({
  testId = `about-me-section`,
  className = ``,
}: Props) {
  return (
    <div className="bg-gray-100 py-8">
      <GridContainer className={className} data-testid={testId}>
        <Heading size="x-large">
          A little <strong>about</strong> me
        </Heading>
        <p className="text-gray-600 text-3xl leading-relaxed">
          I graduated with a computer science degree. I’m passionate about my
          unrealistic dream of having a terrible idea and creating a startup
          from it with no people skills or business experience
        </p>
      </GridContainer>
    </div>
  )
}
