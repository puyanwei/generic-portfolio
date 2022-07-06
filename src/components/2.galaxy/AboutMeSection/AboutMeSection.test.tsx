import { render, screen } from "@testing-library/react"
import { AboutMeSection } from "./AboutMeSection"
import { aboutMeSectionMockProps } from "./AboutMeSection.mockProps"

describe(`AboutMeSection`, () => {
  it(`renders the root`, () => {
    render(<AboutMeSection {...aboutMeSectionMockProps} />)
    expect(screen.getByTestId(`about-me-section`)).toBeVisible()
  })

  it(`renders the children correctly`, () => {
    render(
      <AboutMeSection {...aboutMeSectionMockProps}>Hello world</AboutMeSection>
    )
    expect(screen.getByText(`Hello world`)).toBeVisible()
  })

  it(`className default prop should be blank string`, () => {
    render(<AboutMeSection {...aboutMeSectionMockProps} />)
    expect(screen.getByTestId(`about-me-section`)).not.toHaveClass(`undefined`)
  })
})
