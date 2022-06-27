import { Link } from "@/components/4.planets/Link"
import { Component } from "@/types"

export interface Props extends Component {
  icon: JSX.Element
  navLinks: NavLinks[]
}

interface NavLinks {
  href: string
  label: string
}

export function Header({
  testId = `header`,
  className = ``,
  icon,
  navLinks,
}: Props) {
  return (
    <nav data-testid={testId} className={`flex justify-between ${className}`}>
      <span className="flex">{icon}</span>
      <span className="flex gap-4">
        {navLinks.map(({ label, href }) => (
          <Link key={label} href={href}>
            {label}
          </Link>
        ))}
      </span>
    </nav>
  )
}
