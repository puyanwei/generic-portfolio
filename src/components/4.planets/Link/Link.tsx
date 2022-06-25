import { Component } from "@/types"

export interface Props extends Component {
  url: string
  isNewTab?: boolean
  isNoFollow?: boolean
  isReferrer?: boolean
}

export function Link({
  testId = `link`,
  className = ``,
  children,
  url,
  isNewTab = false,
  isNoFollow = false,
  isReferrer = false,
}: Props) {
  // eslint-disable-next-line quotes
  const follow = `${isNoFollow ? "nofollow " : ""} ${
    // eslint-disable-next-line quotes
    isReferrer ? "" : "noreferrer"
  }}`

  const target = isNewTab ? `_blank` : `_self`
  return (
    <a
      className={`text-gray-400 ${className}`}
      data-testid={testId}
      href={url}
      target={target}
      rel={follow}
    >
      {children}
    </a>
  )
}
