import { render, screen } from "@testing-library/react"
import { Header } from "./Header"
import { headerMockProps } from "./Header.mockProps"

describe(`Header`, () => {
  it(`renders the root`, () => {
    render(<Header {...headerMockProps} />)
    expect(screen.getByTestId(`header`)).toBeVisible()
  })

  it(`className default prop should be blank string`, () => {
    render(<Header {...headerMockProps} />)
    expect(screen.getByTestId(`header`)).not.toHaveClass(`undefined`)
  })

  it.todo(`renders the default styles`)
  it.todo(`applies the anchor links correctly`)
  it.todo(`on medium breakpoint it displays the burger menu`)
})
