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

  it(`Uses the nav tag`, () => {
    const { container } = render(<Header {...headerMockProps} />)
    expect(container.querySelector(`nav`)).toBeVisible()
  })

  it(`renders the default styles`, () => {
    render(<Header {...headerMockProps} />)
    expect(screen.getByTestId(`header`)).toHaveClass(`flex justify-between`)
  })

  it(`renders the list of nav links passed in`, () => {
    render(<Header {...headerMockProps} />)
    const { container } = render(<Header {...headerMockProps} />)
    expect(container.getElementsByTagName(`a`).length).toEqual(4)
  })
  it.todo(`on medium breakpoint it displays the burger menu`)
})
