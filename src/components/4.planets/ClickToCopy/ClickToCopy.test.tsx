import { fireEvent, render, screen } from "@testing-library/react"
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

  it(`onClick copies the email`, () => {
    render(<ClickToCopy>contact@developer.dev</ClickToCopy>)
    const resolvedButtonElement = screen.getByTestId(`click-to-copy`)
    expect(resolvedButtonElement).toBeVisible()

    Object.assign(navigator, {
      clipboard: {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        writeText: () => {},
      },
    })

    jest.spyOn(navigator.clipboard, `writeText`)
    fireEvent.click(resolvedButtonElement)
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      `contact@developer.dev`
    )
  })
})
