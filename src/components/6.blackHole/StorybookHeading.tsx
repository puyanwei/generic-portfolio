import { Component } from "@/types"

export interface Props extends Component {
  size: `medium` | `small`
}

export function StorybookHeading({
  testId = `storybook-heading`,
  className = ``,
  children,
  size: providedSize = `medium`,
}: Props) {
  const size = providedSize === "medium" ? `text-2xl` : `text-xl`

  return (
    <>
      {providedSize === "medium" ? (
        <h2 className={`text-2xl ${className}`} data-testid={testId}>
          {children}
        </h2>
      ) : (
        <h3 className={`text-xl ${className}`} data-testid={testId}>
          {children}
        </h3>
      )}
    </>
  )
}
