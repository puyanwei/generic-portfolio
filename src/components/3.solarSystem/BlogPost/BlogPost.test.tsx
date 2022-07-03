import { render, screen } from "@testing-library/react"
import { BlogPost } from "./BlogPost"
import { blogPostMockProps } from "./BlogPost.mockProps"

describe(`BlogPost`, () => {
  it(`renders the root`, () => {
    render(<BlogPost {...blogPostMockProps} />)
    expect(screen.getByTestId(`blog-post`)).toBeVisible()
  })

  it(`renders the children correctly`, () => {
    render(<BlogPost {...blogPostMockProps}>Hello world</BlogPost>)
    expect(screen.getByText(`Hello world`)).toBeVisible()
  })

  it(`className default prop should be blank string`, () => {
    render(<BlogPost {...blogPostMockProps} />)
    expect(screen.getByTestId(`blog-post`)).not.toHaveClass(`undefined`)
  })

  it.todo(`should render the title of the blogposts`)
  it.todo(`should render the date of the blogposts`)
  it.todo(`should add the url link to the blogpost title`)
})
