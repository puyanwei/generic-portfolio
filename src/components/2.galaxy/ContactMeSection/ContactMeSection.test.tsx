import { render, screen } from "@testing-library/react"
import { ContactMeSection } from "./ContactMeSection"
import { contactMeSectionMockProps } from "./ContactMeSection.mockProps"

describe(`ContactMeSection`, () => {
  it(`renders the root`, () => {
    render(<ContactMeSection {...contactMeSectionMockProps} />)
    expect(screen.getByTestId(`contact-me-section`)).toBeVisible()
  })

  it(`renders the children correctly`, () => {
    render(<ContactMeSection {...contactMeSectionMockProps}>Hello world</ContactMeSection>)
    expect(screen.getByText(`Hello world`)).toBeVisible()
  })
  
  it(`className default prop should be blank string`, () => {
    render(<ContactMeSection {...contactMeSectionMockProps} />)
    expect(screen.getByTestId(`contact-me-section`)).not.toHaveClass(`undefined`)
  })
})
