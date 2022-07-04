import { Component } from "@/types"
import { FaLaptop } from "react-icons/fa"
import { AboutMeSection } from "../2.galaxy/AboutMeSection"
import { BlogFeedSection } from "../2.galaxy/BlogFeedSection"
import { ContactUsSection } from "../2.galaxy/ContactUsSection"
import { Footer } from "../2.galaxy/Footer"
import { Header } from "../2.galaxy/Header"
import { navLinks } from "../2.galaxy/Header/Header.mockProps"
import { HeroSection } from "../2.galaxy/HeroSection"
import { ProjectGallerySection } from "../2.galaxy/ProjectGallerySection"
import { IconWrapper } from "../5.blackHole/Icons"

export interface Props extends Component {}

const icon = <IconWrapper testId="FaLaptop" icon={<FaLaptop size={48} />} />

export function Homepage({ testId = `homepage`, className = `` }: Props) {
  return (
    <div className={className} data-testid={testId}>
      <Header icon={icon} navLinks={navLinks} />
      <HeroSection />
      <ProjectGallerySection />
      <AboutMeSection />
      <BlogFeedSection />
      <ContactUsSection />
      <Footer icon={icon} footerLinks={navLinks} />
    </div>
  )
}
