import { render, screen } from "@testing-library/react"
import { Footer } from "./Footer"
import { footerMockProps } from "./Footer.mockProps"

describe(`Footer`, () => {
  it(`renders the root`, () => {
    render(<Footer {...footerMockProps} />)
    expect(screen.getByTestId(`footer`)).toBeVisible()
  })

  it(`className default prop should be blank string`, () => {
    render(<Footer {...footerMockProps} />)
    expect(screen.getByTestId(`footer`)).not.toHaveClass(`undefined`)
  })
  it.todo(`has the menu items on the right and icon on the left`)
  it.todo(`renders the default styles`)
  it.todo(`applies the anchor links correctly`)
  it.todo(`on medium breakpoint it displays the burger menu`)
})
