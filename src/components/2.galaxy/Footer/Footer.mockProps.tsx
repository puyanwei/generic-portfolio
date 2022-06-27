import { IconWrapper } from "@/components/5.blackHole/Icons"
import { FaLaptop } from "react-icons/fa"
import { Props } from "./Footer"

const icon = <IconWrapper testId="FaLaptop" icon={<FaLaptop size={48} />} />

export const footerMockProps: Props = {
  icon: icon,
  footerLinks: [
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
  ],
}
