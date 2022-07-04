import { render, screen } from "@testing-library/react"
import { BlogPost } from "./BlogPost"
import { blogPostMockProps } from "./BlogPost.mockProps"

describe(`BlogPost`, () => {
  it(`renders the root`, () => {
    render(<BlogPost {...blogPostMockProps} />)
    expect(screen.getByTestId(`blog-post`)).toBeVisible()
  })

  it(`className default prop should be blank string`, () => {
    render(<BlogPost {...blogPostMockProps} />)
    expect(screen.getByTestId(`blog-post`)).not.toHaveClass(`undefined`)
  })

  it(`should render the title and date of the blogposts`, () => {
    render(
      <BlogPost
        {...blogPostMockProps}
        date={`12th March 2022`}
        title={`How I am so productive by waking up at 2am`}
      />
    )
    expect(screen.getByText(`12th March 2022`)).toBeVisible()
    expect(
      screen.getByText(`How I am so productive by waking up at 2am`)
    ).toBeVisible()
  })
  it(`should add the url link to the blogpost title`, () => {
    render(<BlogPost {...blogPostMockProps} url="/contact-us" />)
    expect(screen.getByTestId(`link`)).toHaveAttribute(`href`, `/contact-us`)
  })
})
