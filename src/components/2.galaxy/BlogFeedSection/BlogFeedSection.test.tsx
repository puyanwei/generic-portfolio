import { render, screen } from "@testing-library/react"
import { BlogFeedSection } from "./BlogFeedSection"
import { blogFeedSectionMockProps } from "./BlogFeedSection.mockProps"

describe(`BlogFeedSection`, () => {
  it(`renders the root`, () => {
    render(<BlogFeedSection {...blogFeedSectionMockProps} />)
    expect(screen.getByTestId(`blog-feed-section`)).toBeVisible()
  })

  it(`renders the children correctly`, () => {
    render(<BlogFeedSection {...blogFeedSectionMockProps}>Hello world</BlogFeedSection>)
    expect(screen.getByText(`Hello world`)).toBeVisible()
  })
  
  it(`className default prop should be blank string`, () => {
    render(<BlogFeedSection {...blogFeedSectionMockProps} />)
    expect(screen.getByTestId(`blog-feed-section`)).not.toHaveClass(`undefined`)
  })
})
