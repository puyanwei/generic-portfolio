import { render, screen } from "@testing-library/react"
import { Decorator } from "./Decorator"
import { decoratorMockProps } from "./Decorator.mockProps"

describe(`Decorator`, () => {
  it(`renders the root`, () => {
    render(<Decorator {...decoratorMockProps} />)
    expect(screen.getByTestId(`decorator`)).toBeVisible()
  })
  it(`renders the component text correctly`, () => {
    render(
      <Decorator {...decoratorMockProps}>
        This is a decorator for Storybook components
      </Decorator>
    )
    expect(
      screen.getByText(`This is a decorator for Storybook components`)
    ).toBeVisible()
  })
  it(`className default prop should be blank string`, () => {
    render(<Decorator {...decoratorMockProps} />)
    expect(screen.getByTestId(`decorator`)).not.toHaveClass(`undefined`)
  })
  it.todo(`Provides a layout for a single storybook component`)
  it.todo(`Provides a layout for multiple storybook components`)
  it.todo(`Applies an optional title to one component`)
  it.todo(`Applies an optional title to the different variants of components`)
})
