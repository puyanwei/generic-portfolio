import { Component } from "@/types"

export interface Props extends Component {
  size?: `small` | `medium`
}

const variants = {
  size: {
    small: `text-xl`,
    medium: `text-2xl`,
  },
  tag: {
    small: `h3`,
    medium: `h2`,
  },
}

export function StorybookHeading({
  testId = `storybook-heading`,
  className = ``,
  children,
  size: providedSize = `medium`,
}: Props) {
  const Tag = variants.tag[providedSize] as keyof JSX.IntrinsicElements
  const size = variants.size[providedSize]

  return (
    <Tag className={`${size} ${className}`} data-testid={testId}>
      {children}
    </Tag>
  )
}
