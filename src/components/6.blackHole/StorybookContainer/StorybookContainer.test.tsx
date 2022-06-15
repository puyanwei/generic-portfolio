import { render, screen } from "@testing-library/react"
import { StorybookContainer } from "./StorybookContainer"
import { decoratorMockProps } from "./StorybookContainer.mockProps"

describe(`StorybookContainer`, () => {
  it(`renders the root`, () => {
    render(<StorybookContainer {...decoratorMockProps} />)
    expect(screen.getByTestId(`decorator`)).toBeVisible()
  })
  it(`renders the component text correctly`, () => {
    render(
      <StorybookContainer {...decoratorMockProps}>
        This is a decorator for Storybook components
      </StorybookContainer>
    )
    expect(
      screen.getByText(`This is a decorator for Storybook components`)
    ).toBeVisible()
  })
  it(`className default prop should be blank string`, () => {
    render(<StorybookContainer {...decoratorMockProps} />)
    expect(screen.getByTestId(`decorator`)).not.toHaveClass(`undefined`)
  })
  it.todo(`Provides a layout for a single storybook component`)
  it.todo(`Provides a layout for multiple storybook components`)
})
