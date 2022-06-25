import { Component } from "@/types"

export interface Props extends Component {
  type?: `buton` | `submit` | `reset`
  onClick?: () => void
}

export function Button({
  testId = `button`,
  children,
  className = ``,
  onClick,
}: Props) {
  return (
    <button
      className={`py-2 px-4 border-2 rounded border-gray-300 text-gray-600 hover:border-gray-400 font-semibold ${className}`}
      data-testid={testId}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
