import { slide as Menu } from "react-burger-menu"
import Link from "next/link"
import { Component } from "@/types"

export interface Props extends Component {
  icon: JSX.Element
  navLinks: NavLinks[]
}

interface NavLinks {
  id: string
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
    <nav data-testid={testId} className={className}>
      {icon}
      <Menu>
        {navLinks.map(link => (
          <Link key="link.label" id="home" className="menu-item" href="/">
            {link.label}
          </Link>
        ))}
      </Menu>
    </nav>
  )
}
