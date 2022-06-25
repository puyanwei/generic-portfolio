import { IconWrapper } from "@/components/5.blackHole/Icons/IconWrapper"
import { render, screen } from "@testing-library/react"
import { BsArrowRight } from "react-icons/bs"
import { Link } from "./Link"
import { linkMockProps } from "./Link.mockProps"

describe(`Link`, () => {
  it(`renders the root`, () => {
    render(<Link {...linkMockProps} />)
    expect(screen.getByTestId(`link`)).toHaveAttribute(`target`, `_self`)
    expect(screen.getByTestId(`link`)).toBeVisible()
  })

  it(`renders the children correctly`, () => {
    render(<Link {...linkMockProps}>Hello world</Link>)
    expect(screen.getByText(`Hello world`)).toBeVisible()
  })

  it(`className default prop should be blank string`, () => {
    render(<Link {...linkMockProps} />)
    expect(screen.getByTestId(`link`)).not.toHaveClass(`undefined`)
  })

  it(`should be an anchor tag`, () => {
    const { container } = render(<Link {...linkMockProps} />)
    expect(container.querySelector(`a`)).toBeInTheDocument()
  })

  it(`renders the default style and has arrow icon after it`, () => {
    render(<Link {...linkMockProps} />)
    expect(screen.getByTestId(`link`)).toHaveClass(
      `text-gray-400 hover:text-gray-500`
    )
    expect(screen.getByTestId(`BsArrowRight`)).toBeInTheDocument()
  })

  it(`adds an icon after the text if one is provided`, () => {
    const icon = <IconWrapper icon={<BsArrowRight />} testId="BsArrowRight" />
    render(<Link {...linkMockProps} icon={icon} />)
  })

  it(`accepts a href`, () => {
    render(<Link {...linkMockProps} href="/projects" />)
    expect(screen.getByTestId(`link`)).toHaveAttribute(`href`, `/projects`)
  })

  it(`is able to open in a new tab`, () => {
    render(<Link {...linkMockProps} isNewTab={true} />)
    expect(screen.getByTestId(`link`)).toHaveAttribute(`target`, `_blank`)
  })

  it(`referrer has has no follow if set`, () => {
    render(<Link {...linkMockProps} isNoFollow />)
    expect(screen.getByTestId(`link`)).toHaveAttribute(`rel`, `nofollow `)
  })

  it(`referrer has has no referrer if set`, () => {
    render(<Link {...linkMockProps} isNoReferrer />)
    expect(screen.getByTestId(`link`)).toHaveAttribute(`rel`, ` noreferrer`)
  })

  it(`referrer has has no referrer and no follow if both are set`, () => {
    render(<Link {...linkMockProps} isNoReferrer isNoFollow />)
    expect(screen.getByTestId(`link`)).toHaveAttribute(
      `rel`,
      `nofollow noreferrer`
    )
  })
})
