import { Component } from "@/types"

export interface Props extends Component {
  size?: `small` | `medium` | `large` | `x-large`
  theme: `default` | `white`
}

const variants = {
  theme: {
    default: `text-gray-600`,
    white: `text-white`,
  },
  size: {
    small: `text-2xl`,
    medium: `text-3xl`,
    large: `text-4xl`,
    "x-large": `text-5xl`,
  },
  tag: {
    small: `h3`,
    medium: `h2`,
    large: `h1`,
    "x-large": `h1`,
  },
}

export function Heading({
  testId = `heading`,
  className = ``,
  children,
  size: providedSize = `medium`,
  theme: providedTheme = `default`,
}: Props) {
  const Tag = variants.tag[providedSize] as keyof JSX.IntrinsicElements
  const size = variants.size[providedSize]
  const theme = variants.theme[providedTheme]

  return (
    <Tag
      className={`leading-relaxed ${theme} ${size} ${className}`}
      data-testid={testId}
    >
      {children}
    </Tag>
  )
}
