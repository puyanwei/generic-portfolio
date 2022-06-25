import { render, screen } from "@testing-library/react"
import { Button } from "./Button"
import { buttonMockProps } from "./Button.mockProps"

describe(`Button`, () => {
  it(`renders the root`, () => {
    render(<Button {...buttonMockProps} />)
    expect(screen.getByTestId(`button`)).toBeVisible()
  })

  it(`renders the children correctly`, () => {
    render(<Button {...buttonMockProps}>Hello world</Button>)
    expect(screen.getByText(`Hello world`)).toBeVisible()
  })

  it(`className default prop should be blank string`, () => {
    render(<Button {...buttonMockProps} />)
    expect(screen.getByTestId(`button`)).not.toHaveClass(`undefined`)
  })

  it(`styles out the primary theme by default`, () => {
    render(<Button {...buttonMockProps} />)
    expect(screen.getByTestId(`button`)).toHaveClass(
      ` border-2 rounded border-gray-300 text-gray-600`
    )
  })
  it(`hovering over the button changes its colour`, () => {
    render(<Button {...buttonMockProps} />)
    expect(screen.getByTestId(`button`)).toHaveClass(`hover:border-gray-400`)
  })
  // it(`triggers the onClick function when clicked`)
  // it(`triggers the onSubmit function when clicked if type submit`)
  // it(`tabbing onto the button targets it`)
  // it(`pressing enter or space clicks it when focusing the button`)
})
