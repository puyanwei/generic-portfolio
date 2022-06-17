import { render, screen } from "@testing-library/react"
import { Homepage } from "./Homepage"
import { homepageMockProps } from "./Homepage.mockProps"

describe(`Homepage`, () => {
  it(`renders the root`, () => {
    render(<Homepage {...homepageMockProps} />)
    expect(screen.getByTestId(`homepage`)).toBeVisible()
  })
})
