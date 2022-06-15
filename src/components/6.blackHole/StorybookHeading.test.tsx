import { render, screen } from "@testing-library/react"
import { StorybookHeading } from "./StorybookHeading"
import { storybookHeadingMockProps } from "./StorybookHeading.mockProps"

describe(`StorybookHeading`, () => {
  it(`renders the root`, () => {
    render(
      <StorybookHeading {...storybookHeadingMockProps}>
        Hello world
      </StorybookHeading>
    )
    expect(screen.getByTestId(`storybook-heading`)).toBeVisible()
    expect(screen.getByText(`Hello world`)).toBeVisible()
  })
  it(`renders the component text correctly`, () => {
    render(
      <StorybookHeading {...storybookHeadingMockProps}>
        This is a heading for Storybook components
      </StorybookHeading>
    )
    expect(
      screen.getByText(`This is a heading for Storybook components`)
    ).toBeVisible()
  })
  it(`className default prop should be blank string`, () => {
    render(<StorybookHeading {...storybookHeadingMockProps} />)
    expect(screen.getByTestId(`storybook-heading`)).not.toHaveClass(`undefined`)
  })
  it(`is a 2xl size by default`, () => {
    const { container } = render(
      <StorybookHeading {...storybookHeadingMockProps}>
        Hello world
      </StorybookHeading>
    )
    expect(screen.getByTestId(`storybook-heading`)).toHaveClass(`text-2xl`)
    expect(container.querySelector(`h2`)).toBeInTheDocument()
  })
  it(`is a xl if size prop is set to small`, () => {
    const { container } = render(
      <StorybookHeading {...storybookHeadingMockProps} size="small">
        Hello world
      </StorybookHeading>
    )

    expect(screen.getByTestId(`storybook-heading`)).toHaveClass(`text-xl`)
    expect(container.querySelector(`h3`)).toBeInTheDocument()
  })
})
