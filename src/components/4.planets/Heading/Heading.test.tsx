import { render, screen } from "@testing-library/react"
import { Heading } from "./Heading"
import { headingMockProps } from "./Heading.mockProps"

describe(`Heading`, () => {
  it(`renders the root`, () => {
    render(<Heading {...headingMockProps} />)
    expect(screen.getByTestId(`heading`)).toBeVisible()
  })

  it(`renders the children correctly`, () => {
    render(<Heading {...headingMockProps}>Hello world</Heading>)
    expect(screen.getByText(`Hello world`)).toBeVisible()
  })

  it(`className default prop should be blank string`, () => {
    render(<Heading {...headingMockProps} />)
    expect(screen.getByTestId(`heading`)).not.toHaveClass(`undefined`)
  })

  it(`is small font size and h3`, () => {
    const { container } = render(
      <Heading {...headingMockProps} size="small">
        Hello world
      </Heading>
    )
    expect(screen.getByTestId(`heading`)).toHaveClass(`text-2xl`)
    expect(container.querySelector(`h3`)).toBeInTheDocument()
  })

  it(`is medium font size and h2 by default`, () => {
    const { container } = render(
      <Heading {...headingMockProps}>Hello world</Heading>
    )
    expect(screen.getByTestId(`heading`)).toHaveClass(`text-3xl`)
    expect(container.querySelector(`h2`)).toBeInTheDocument()
  })

  it(`is large font size and h1`, () => {
    const { container } = render(
      <Heading {...headingMockProps} size="large">
        Hello world
      </Heading>
    )
    expect(screen.getByTestId(`heading`)).toHaveClass(`text-4xl`)
    expect(container.querySelector(`h1`)).toBeInTheDocument()
  })
  it(`is extra large font size and h1`, () => {
    const { container } = render(
      <Heading {...headingMockProps} size="x-large">
        Hello world
      </Heading>
    )
    expect(screen.getByTestId(`heading`)).toHaveClass(`text-5xl`)
    expect(container.querySelector(`h1`)).toBeInTheDocument()
  })
})
