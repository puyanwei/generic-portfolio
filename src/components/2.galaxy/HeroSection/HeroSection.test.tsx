import { render, screen } from "@testing-library/react"
import { HeroSection } from "./HeroSection"
import { heroSectionMockProps } from "./HeroSection.mockProps"

describe(`HeroSection`, () => {
  it(`renders the root`, () => {
    render(<HeroSection {...heroSectionMockProps} />)
    expect(screen.getByTestId(`hero-section`)).toBeVisible()
  })

  it(`className default prop should be blank string`, () => {
    render(<HeroSection {...heroSectionMockProps} />)
    expect(screen.getByTestId(`hero-section`)).not.toHaveClass(`undefined`)
  })
})
