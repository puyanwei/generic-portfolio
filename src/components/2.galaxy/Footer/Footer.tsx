import { GridContainer } from "@/components/4.planets/GridContainer"
import { Link } from "@/components/4.planets/Link"
import { Component } from "@/types"

export interface Props extends Component {
  icon: JSX.Element
  footerLinks: FooterLinks[]
}

interface FooterLinks {
  href: string
  label: string
}

export function Footer({
  testId = `footer`,
  className = ``,
  icon,
  footerLinks,
}: Props) {
  return (
    <GridContainer className="mb-4">
      <footer
        data-testid={testId}
        className={`flex justify-between w-full ${className}`}
      >
        <span className="flex">{icon}</span>
        <span className="flex items-end gap-6">
          {footerLinks.map(({ label, href }) => (
            <Link className="hover:underline" key={label} href={href}>
              {label}
            </Link>
          ))}
        </span>
      </footer>
    </GridContainer>
  )
}
