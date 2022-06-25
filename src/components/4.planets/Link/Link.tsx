import { IconWrapper } from "../../5.blackHole/Icons"
import { Component } from "@/types"
import { BsArrowRight } from "react-icons/bs"

export interface Props extends Component {
  url: string
  isNewTab?: boolean
  isNoFollow?: boolean
  isNoReferrer?: boolean
}

export function Link({
  testId = `link`,
  className = ``,
  children,
  url,
  isNewTab = false,
  isNoFollow = false,
  isNoReferrer = false,
}: Props) {
  const follow = isNoFollow ? `nofollow` : ``
  const referrer = isNoReferrer ? `noreferrer` : ``
  const rel = `${follow.trim()} ${referrer.trim()}`

  const target = isNewTab ? `_blank` : `_self`
  return (
    <a
      className={`text-gray-400 hover:text-gray-500 flex ${className}`}
      data-testid={testId}
      href={url}
      target={target}
      rel={rel}
    >
      {children} <IconWrapper icon={<BsArrowRight />} testId="BsArrowRight" />
    </a>
  )
}
