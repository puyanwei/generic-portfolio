import { IconWrapper } from "@/components/5.blackHole/Icons"
import { FaLaptop } from "react-icons/fa"
import { Props } from "./Header"

const icon = <IconWrapper testId="FaLaptop" icon={<FaLaptop size={48} />} />

export const navLinks = [
  {
    href: `#project-gallery-section`,
    label: `Projects`,
  },
  {
    href: `#about-me-section`,
    label: `About`,
  },
  {
    href: `#blog-feed-section`,
    label: `Posts`,
  },
  {
    href: `#contact-me-section`,
    label: `Contact`,
  },
]

export const headerMockProps: Props = {
  icon: icon,
  navLinks,
}
