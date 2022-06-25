import { Component } from "@/types"

export interface Props extends Component {}

export function Button({ testId = `button`, children, className = "" }: Props) {
  return (
    <button
      className={`py-2 px-4 border-2 rounded border-gray-300 text-gray-600 hover:border-gray-400 font-semibold ${className}`}
      data-testid={testId}
    >
      {children}
    </button>
  )
}
