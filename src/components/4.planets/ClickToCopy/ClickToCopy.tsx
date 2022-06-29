import React, { MouseEvent } from "react"
import { Component } from "@/types"

export interface Props extends Component {}

export function ClickToCopy({
  testId = `click-to-copy`,
  children,
  className = ``,
}: Props) {
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    navigator.clipboard.writeText(event.currentTarget.textContent as string)
    event.currentTarget.textContent = `Copied to notepad`
  }
  return (
    <button
      className={className}
      data-testid={testId}
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
