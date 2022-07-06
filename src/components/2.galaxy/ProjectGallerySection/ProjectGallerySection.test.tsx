import { render, screen } from "@testing-library/react"
import { ProjectGallerySection } from "./ProjectGallerySection"
import { projectGallerySectionMockProps } from "./ProjectGallerySection.mockProps"

describe(`ProjectGallerySection`, () => {
  it(`renders the root`, () => {
    render(<ProjectGallerySection {...projectGallerySectionMockProps} />)
    expect(screen.getByTestId(`project-gallery-section`)).toBeVisible()
  })

  it(`renders the children correctly`, () => {
    render(
      <ProjectGallerySection {...projectGallerySectionMockProps}>
        Hello world
      </ProjectGallerySection>
    )
    expect(screen.getByText(`Hello world`)).toBeVisible()
  })

  it(`className default prop should be blank string`, () => {
    render(<ProjectGallerySection {...projectGallerySectionMockProps} />)
    expect(screen.getByTestId(`project-gallery-section`)).not.toHaveClass(
      `undefined`
    )
  })
})
