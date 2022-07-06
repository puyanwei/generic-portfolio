import { Link } from "@/components/4.planets/Link"
import { Component } from "@/types"

export interface Props extends Component {
  url: string
  isNewTab?: boolean
  isNoFollow?: boolean
  isNoReferrer?: boolean
  icon?: JSX.Element
}

export function ViewMore({
  testId = `view-more`,
  className = ``,
  url,
  isNewTab = false,
  isNoFollow = false,
  isNoReferrer = false,
  icon: providedIcon,
}: Props) {
  const icon = !!providedIcon ? providedIcon : null

  return (
    <Link
      href={url}
      className={`text-gray-400 hover:text-gray-500 flex ${className}`}
      isNewTab={isNewTab}
      isNoFollow={isNoFollow}
      isNoReferrer={isNoReferrer}
      testId={testId}
    >
      View more {icon}
    </Link>
  )
}
