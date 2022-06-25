import { render, screen } from "@testing-library/react"
import { BsArrowRight } from "react-icons/bs"
import { IconWrapper } from "./IconWrapper"

describe(`Icons`, () => {
  it(`renders the root`, () => {
    render(<IconWrapper icon={<BsArrowRight />} testId="BsArrowRight" />)
    expect(screen.getByTestId(`BsArrowRight`)).toBeVisible()
  })

  it(`className default prop should be blank string`, () => {
    render(<IconWrapper icon={<BsArrowRight />} testId="BsArrowRight" />)
    expect(screen.getByTestId(`icons`)).not.toHaveClass(`undefined`)
  })
})
