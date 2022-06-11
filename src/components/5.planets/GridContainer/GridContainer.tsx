import { Component } from "@/types"

export interface Props extends Component {
  hasMaxWidth: boolean
}

export function GridContainer({
  testId = `grid-container`,
  children,
  className = ``,
  hasMaxWidth = true,
}: Props) {
  const maxWidth = hasMaxWidth ? `max-w-[1280px]` : ``

  return (
    <div
      className={`min-w-[320px] mx-auto grid ${maxWidth}${className}`}
      data-testid={testId}
    >
      {children}
    </div>
  )
}
