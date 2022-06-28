import { render, screen } from "@testing-library/react"
import { Footer } from "./Footer"
import { footerMockProps } from "./Footer.mockProps"

describe(`Footer`, () => {
  it(`renders the root`, () => {
    render(<Footer {...footerMockProps} />)
    expect(screen.getByTestId(`footer`)).toBeVisible()
  })

  it(`className default prop should be blank string`, () => {
    render(<Footer {...footerMockProps} />)
    expect(screen.getByTestId(`footer`)).not.toHaveClass(`undefined`)
  })
  it(`uses the footer tag`, () => {
    const { container } = render(<Footer {...footerMockProps} />)
    expect(container.querySelector(`footer`)).toBeVisible()
  })
  it(`renders the default styles`, () => {
    render(<Footer {...footerMockProps} />)
    expect(screen.getByTestId(`footer`)).toHaveClass(`flex justify-between`)
  })
  it(`renders the list of nav links passed in`, () => {
    const { container } = render(<Footer {...footerMockProps} />)
    expect(container.getElementsByTagName(`a`).length).toEqual(4)
  })
})
