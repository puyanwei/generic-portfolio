import { render, screen } from "@testing-library/react"
import { GridContainer } from "./GridContainer"

describe(`GridContainer`, () => {
  it(`renders the root`, () => {
    render(<GridContainer>Hello</GridContainer>)
    expect(screen.getByTestId(`grid-container`)).toBeVisible()
  })
  it(`renders the component text correctly`, () => {
    render(<GridContainer>This is a grid container</GridContainer>)
    expect(screen.getByText(`This is a grid container`)).toBeVisible()
  })
  it(`className default prop should be blank string`, () => {
    render(<GridContainer>Hello</GridContainer>)
    expect(screen.getByTestId(`grid-container`)).not.toHaveClass(`undefined`)
  })
  it(`returns null if grid container has no children`, () => {
    const { container } = render(<GridContainer />)
    expect(container.children.length).toEqual(0)
  })
  it(`has a max width of 1280px by default`, () => {
    render(<GridContainer>Default max width is 1280px</GridContainer>)
    expect(screen.getByTestId(`grid-container`)).toHaveClass(`max-w-[1280px]`)
  })
  it(`has a min width of 320px by default`, () => {
    render(<GridContainer>Default max width is 1280px</GridContainer>)
    expect(screen.getByTestId(`grid-container`)).toHaveClass(`min-w-[320px]`)
  })
  it(`has a no max width when the hasMaxWidth prop is set to false`, () => {
    render(<GridContainer hasMaxWidth={false}>No max width</GridContainer>)

    expect(screen.getByTestId(`grid-container`)).not.toHaveClass(
      `max-w-[1280px]`
    )
    expect(screen.getByTestId(`grid-container`)).toHaveClass(`-mx-16`)
  })

  it(`has a 1 column layout by default`, () => {
    render(
      <GridContainer>
        <div>CHILDREN</div>
      </GridContainer>
    )
    expect(screen.getByTestId(`grid-container`)).toHaveClass(`grid-cols-1`)
  })

  it(`has a 1 column layout when columns 1 is provided`, () => {
    render(
      <GridContainer columns={1}>
        <div>CHILDREN</div>
        <div>CHILDREN</div>
        <div>CHILDREN</div>
      </GridContainer>
    )
    expect(screen.getByTestId(`grid-container`)).toHaveClass(`grid-cols-1`)
  })

  it(`has a 2 column layout on large breakpoint when columns 2 is provided`, () => {
    render(
      <GridContainer columns={2}>
        <div>CHILDREN</div>
        <div>CHILDREN</div>
        <div>CHILDREN</div>
        <div>CHILDREN</div>
      </GridContainer>
    )
    expect(screen.getByTestId(`grid-container`)).toHaveClass(`grid-cols-2`)
  })

  it(`has a 3 column layout on large breakpoint when columns 3 is provided`, () => {
    render(
      <GridContainer columns={3}>
        <div>CHILDREN</div>
        <div>CHILDREN</div>
        <div>CHILDREN</div>
      </GridContainer>
    )
    expect(screen.getByTestId(`grid-container`)).toHaveClass(`grid-cols-3`)
  })

  it(`has a 4 column layout when columns 4 is provided`, () => {
    render(
      <GridContainer columns={4}>
        <div>CHILDREN</div>
        <div>CHILDREN</div>
        <div>CHILDREN</div>
        <div>CHILDREN</div>
      </GridContainer>
    )
    expect(screen.getByTestId(`grid-container`)).toHaveClass(`grid-cols-4`)
  })

  it(`has a 12 column layout when columns 12 is provided`, () => {
    render(
      <GridContainer columns={12}>
        <div>CHILDREN</div>
      </GridContainer>
    )
    expect(screen.getByTestId(`grid-container`)).toHaveClass(`grid-cols-12`)
  })

  it(`has a 1rem gap by default`, () => {
    render(
      <GridContainer columns={4}>
        <div>CHILDREN</div>
      </GridContainer>
    )
    expect(screen.getByTestId(`grid-container`)).toHaveClass(`gap-6`)
  })
  it(`sets the alignments of the children`, () => {
    render(
      <GridContainer alignment="left">
        <div>CHILDREN</div>
      </GridContainer>
    )
    expect(screen.getByTestId(`grid-container`)).toHaveClass(
      `justify-items-start`
    )
  })
})
