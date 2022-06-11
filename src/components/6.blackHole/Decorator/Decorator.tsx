import { Component } from "@/types"

export interface Props extends Component {
  title?: string
}

export function Decorator({
  testId = `decorator`,
  children,
  className = ``,
}: Props) {
  return (
    <div className={`p-8 space-y-8 ${className}`} data-testid={testId}>
      {children}
    </div>
  )
}
