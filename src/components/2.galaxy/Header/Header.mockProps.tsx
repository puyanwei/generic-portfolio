import { IconWrapper } from "@/components/5.blackHole/Icons"
import { FaLaptop } from "react-icons/fa"
import { Props } from "./Header"

const icon = <IconWrapper testId="FaLaptop" icon={<FaLaptop size={48} />} />

export const navLinks = [
  {
    href: `/projects`,
    label: `Projects`,
  },
  {
    href: `/about`,
    label: `About`,
  },
  {
    href: `/posts`,
    label: `Posts`,
  },
  {
    href: `/contact`,
    label: `Contact`,
  },
]

export const headerMockProps: Props = {
  icon: icon,
  navLinks,
}
