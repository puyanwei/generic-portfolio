import { GridContainer } from "@/components/4.planets/GridContainer"
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
    <GridContainer>
      <nav
        data-testid={testId}
        className={`flex justify-between w-full ${className}`}
      >
        <span>{icon}</span>
        <span className="flex items-center gap-4">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href}>
              {label}
            </Link>
          ))}
        </span>
      </nav>
    </GridContainer>
  )
}
