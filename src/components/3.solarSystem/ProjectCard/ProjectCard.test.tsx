import { render, screen } from "@testing-library/react"
import { ProjectCard } from "./ProjectCard"
import { projectCardMockProps } from "./ProjectCard.mockProps"

describe(`ProjectCard`, () => {
  it(`renders the root`, () => {
    render(<ProjectCard {...projectCardMockProps} />)
    expect(screen.getByTestId(`project-card`)).toBeVisible()
  })

  it(`renders the children correctly`, () => {
    render(<ProjectCard {...projectCardMockProps}>Hello world</ProjectCard>)
    expect(screen.getByText(`Hello world`)).toBeVisible()
  })
  
  it(`className default prop should be blank string`, () => {
    render(<ProjectCard {...projectCardMockProps} />)
    expect(screen.getByTestId(`project-card`)).not.toHaveClass(`undefined`)
  })
})
