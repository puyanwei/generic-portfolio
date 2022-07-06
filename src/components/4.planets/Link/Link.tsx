import NextLink from "next/link"
import { IconWrapper } from "../../5.blackHole/Icons"
import { Component } from "@/types"
import { BsArrowRight } from "react-icons/bs"

export interface Props extends Component {
  href: string
  isNewTab?: boolean
  isNoFollow?: boolean
  isNoReferrer?: boolean
  hasIcon?: boolean
}

export function Link({
  testId = `link`,
  className = ``,
  children,
  href,
  isNewTab = false,
  isNoFollow = false,
  isNoReferrer = false,
  hasIcon = false,
}: Props) {
  const follow = isNoFollow ? `nofollow` : ``
  const referrer = isNoReferrer ? `noreferrer` : ``
  const rel = `${follow.trim()} ${referrer.trim()}`

  const target = isNewTab ? `_blank` : `_self`
  return (
    <NextLink href={href}>
      <a
        className={`flex ${className}`}
        data-testid={testId}
        target={target}
        rel={rel}
      >
        {children}
        {hasIcon && <IconWrapper icon={<BsArrowRight />} />}
      </a>
    </NextLink>
  )
}
