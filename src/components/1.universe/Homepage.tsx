import { AboutMeSection } from "../2.galaxy/AboutMeSection"
import { BlogFeedSection } from "../2.galaxy/BlogFeedSection"
import { ContactMeSection } from "../2.galaxy/ContactMeSection"
import { HeroSection } from "../2.galaxy/HeroSection"
import { ProjectGallerySection } from "../2.galaxy/ProjectGallerySection"

export function Homepage() {
  return (
    <div data-testid="homepage">
      <HeroSection />
      <ProjectGallerySection />
      <AboutMeSection />
      <BlogFeedSection />
      <ContactMeSection />
    </div>
  )
}
