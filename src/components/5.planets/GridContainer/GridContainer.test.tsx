import { render, screen } from "@testing-library/react"
import { GridContainer } from "./GridContainer"
import { gridContainerMockProps } from "./GridContainer.mockProps"

describe(`GridContainer`, () => {
  it(`renders the root`, () => {
    render(<GridContainer {...gridContainerMockProps} />)
    expect(screen.getByTestId(`grid-container`)).toBeVisible()
  })
  it(`renders the component text correctly`, () => {
    render(
      <GridContainer {...gridContainerMockProps}>
        This is a grid container
      </GridContainer>
    )
    expect(screen.getByText(`This is a grid container`)).toBeVisible()
  })
  it(`className default prop should be blank string`, () => {
    render(<GridContainer {...gridContainerMockProps} />)
    expect(screen.getByTestId(`grid-container`)).not.toHaveClass(`undefined`)
  })
  it(`has a max width of 1280px by default`, () => {
    render(
      <GridContainer {...gridContainerMockProps}>
        Default max width is 1280px
      </GridContainer>
    )
    expect(screen.getByTestId(`grid-container`)).toHaveClass(`max-w-[1280px]`)
  })
  it(`has a min width of 320px by default`, () => {
    render(
      <GridContainer {...gridContainerMockProps}>
        Default max width is 1280px
      </GridContainer>
    )
    expect(screen.getByTestId(`grid-container`)).toHaveClass(`min-w-[320px]`)
  })
  it(`has a no max width when the hasMaxWidth prop is set to false`, () => {
    render(
      <GridContainer {...gridContainerMockProps} hasMaxWidth={false}>
        No max width
      </GridContainer>
    )

    expect(screen.getByTestId(`grid-container`)).not.toHaveClass(
      `max-w-[1280px]`
    )
    expect(screen.getByTestId(`grid-container`)).toHaveClass(`-mx-16`)
  })
})
