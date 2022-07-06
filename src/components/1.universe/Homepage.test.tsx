import { render, screen } from "@testing-library/react"
import { Homepage } from "./Homepage"

describe(`Homepage`, () => {
  it(`renders the root`, () => {
    render(<Homepage />)
    expect(screen.getByTestId(`homepage`)).toBeVisible()
  })
})
