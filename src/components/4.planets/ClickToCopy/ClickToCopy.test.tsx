import { render, screen } from "@testing-library/react"
import { ClickToCopy } from "./ClickToCopy"

describe(`ClickToCopy`, () => {
  it(`renders the root`, () => {
    render(<ClickToCopy>Hello world</ClickToCopy>)
    expect(screen.getByTestId(`click-to-copy`)).toBeVisible()
  })

  it(`renders the children correctly`, () => {
    render(<ClickToCopy>Hello world</ClickToCopy>)
    expect(screen.getByText(`Hello world`)).toBeVisible()
  })

  it(`className default prop should be blank string`, () => {
    render(<ClickToCopy>Hello world</ClickToCopy>)
    expect(screen.getByTestId(`click-to-copy`)).not.toHaveClass(`undefined`)
  })
})
