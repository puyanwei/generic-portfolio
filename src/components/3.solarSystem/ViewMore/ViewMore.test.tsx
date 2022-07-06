import { render, screen } from "@testing-library/react"
import { ViewMore } from "./ViewMore"
import { viewMoreMockProps } from "./ViewMore.mockProps"

describe(`ViewMore`, () => {
  it(`renders the root`, () => {
    render(<ViewMore {...viewMoreMockProps} />)
    expect(screen.getByTestId(`view-more`)).toBeVisible()
  })

  it(`renders the children correctly`, () => {
    render(<ViewMore {...viewMoreMockProps}>Hello world</ViewMore>)
    expect(screen.getByText(`Hello world`)).toBeVisible()
  })

  it(`className default prop should be blank string`, () => {
    render(<ViewMore {...viewMoreMockProps} />)
    expect(screen.getByTestId(`view-more`)).not.toHaveClass(`undefined`)
  })
})
