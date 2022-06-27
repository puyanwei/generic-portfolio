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
    <footer
      data-testid={testId}
      className={`flex justify-between ${className}`}
    >
      <span className="flex">{icon}</span>
      <span className="flex gap-4">
        {footerLinks.map(({ label, href }) => (
          <Link key={label} href={href}>
            {label}
          </Link>
        ))}
      </span>
    </footer>
  )
}
