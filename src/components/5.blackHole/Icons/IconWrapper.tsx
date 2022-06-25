import { Component } from "@/types"

export interface Props extends Component {
  icon: JSX.Element
}

export function IconWrapper({ testId = `icon`, className = ``, icon }: Props) {
  return (
    <span className={className} data-testId={testId}>
      {icon}
    </span>
  )
}
