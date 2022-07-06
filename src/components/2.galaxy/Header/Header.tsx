import { GridContainer } from "@/components/4.planets/GridContainer"
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
        className={` w-full fixed z-10 top-0 left-0 bg-white shadow pb-2 ${className}`}
      >
        <div className="max-w-[1280px] flex mx-auto justify-between w-full">
          <span className="pt-2">{icon}</span>
          <span className="flex items-center gap-4 pt-2">
            {navLinks.map(({ label, href }) => (
              <a className="hover:underline" key={label} href={href}>
                {label}
              </a>
            ))}
          </span>
        </div>
      </nav>
    </GridContainer>
  )
}
