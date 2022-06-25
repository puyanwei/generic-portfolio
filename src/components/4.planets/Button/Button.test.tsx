import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
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
  it(`triggers the onClick function when clicked`, () => {
    const onClick = jest.fn()
    render(<Button {...buttonMockProps} onClick={onClick} />)
    fireEvent.click(screen.getByTestId(`button`))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
  it(`triggers the onSubmit function when clicked if type submit`, () => {
    const onSubmit = jest.fn()
    render(
      <form onSubmit={onSubmit}>
        <Button {...buttonMockProps} type="submit" />
      </form>
    )
    fireEvent.click(screen.getByTestId(`button`))
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })
  it(`pressing enter or space clicks it when focusing the button`, async () => {
    const onClick = jest.fn()
    render(<Button {...buttonMockProps} onClick={onClick} />)
    screen.getByTestId(`button`).focus()
    await userEvent.keyboard(`[Enter]`)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
