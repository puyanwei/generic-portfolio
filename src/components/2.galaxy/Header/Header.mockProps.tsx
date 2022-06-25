import { FaLaptop } from "react-icons/fa"
import { Props } from "./Header"

const icon = <FaLaptop />

export const headerMockProps: Props = {
  icon: icon,
  navLinks: [
    {
      id: `projects`,
      href: `/projects`,
      label: `Projects`,
    },
    {
      id: `about`,
      href: `/about`,
      label: `About`,
    },
    {
      id: `posts`,
      href: `/posts`,
      label: `Posts`,
    },
    {
      id: `contact`,
      href: `/contact`,
      label: `Contact`,
    },
  ],
}
