import { Component } from "@/types"

export interface Props extends Component {
  icon: JSX.Element
}

export function IconWrapper({ testId = `icon`, className = ``, icon }: Props) {
  return (
    <span
      className={`flex items-center pl-1 ${className}`}
      data-testid={testId}
    >
      {icon}
    </span>
  )
}
