import { render, screen } from "@testing-library/react"
import { ProjectGallerySection } from "./ProjectGallerySection"

describe(`ProjectGallerySection`, () => {
  it(`renders the root`, () => {
    render(<ProjectGallerySection />)
    expect(screen.getByTestId(`project-gallery-section`)).toBeVisible()
  })

  it(`className default prop should be blank string`, () => {
    render(<ProjectGallerySection />)
    expect(screen.getByTestId(`project-gallery-section`)).not.toHaveClass(
      `undefined`
    )
  })
})
