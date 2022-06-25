import { render, screen } from "@testing-library/react"
import { Image } from "./Image"
import { imageMockProps } from "./Image.mockProps"

describe(`Image`, () => {
  it(`renders the root`, () => {
    render(<Image {...imageMockProps} alt="A placeholder image" />)
    expect(screen.getByTestId(`image`)).toBeVisible()
  })

  it(`className default prop should be blank string`, () => {
    render(<Image {...imageMockProps} alt="A placeholder image" />)
    expect(screen.getByTestId(`image`)).not.toHaveClass(`undefined`)
  })
})
