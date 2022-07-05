import { AboutMeSection } from "../2.galaxy/AboutMeSection"
import { BlogFeedSection } from "../2.galaxy/BlogFeedSection"
import { ContactUsSection } from "../2.galaxy/ContactUsSection"
import { HeroSection } from "../2.galaxy/HeroSection"
import { ProjectGallerySection } from "../2.galaxy/ProjectGallerySection"

export function Homepage() {
  return (
    <>
      <HeroSection />
      <ProjectGallerySection />
      <AboutMeSection />
      <BlogFeedSection />
      <ContactUsSection />
    </>
  )
}
