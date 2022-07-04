import { render, screen } from "@testing-library/react"
import { ContactUsSection } from "./ContactUsSection"
import { contactUsSectionMockProps } from "./ContactUsSection.mockProps"

describe(`ContactUsSection`, () => {
  it(`renders the root`, () => {
    render(<ContactUsSection {...contactUsSectionMockProps} />)
    expect(screen.getByTestId(`contact-us-section`)).toBeVisible()
  })

  it(`renders the children correctly`, () => {
    render(<ContactUsSection {...contactUsSectionMockProps}>Hello world</ContactUsSection>)
    expect(screen.getByText(`Hello world`)).toBeVisible()
  })
  
  it(`className default prop should be blank string`, () => {
    render(<ContactUsSection {...contactUsSectionMockProps} />)
    expect(screen.getByTestId(`contact-us-section`)).not.toHaveClass(`undefined`)
  })
})
