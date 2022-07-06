import React, { MouseEvent } from "react"
import { Component } from "@/types"

export interface Props extends Component {}

export function ClickToCopy({
  testId = `click-to-copy`,
  children,
  className = ``,
}: Props) {
  function copyToClipboard(textToCopy: string) {
    navigator.clipboard.writeText(textToCopy)
  }

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    copyToClipboard(event.currentTarget.textContent as string)
    event.currentTarget.textContent = `Copied to clipboard! I'm so desperate please hire me!! :)`
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
