import { Component } from "@/types"

const variants = {
  theme: {
    default: `text-gray-600`,
    white: `text-white`,
  },
  size: {
    small: `text-xl md:text-2xl`,
    medium: `text-2xl md:text-3xl`,
    large: `text-3xl md:text-4xl`,
    "x-large": `text-4xl md:text-5xl`,
    reset: ``,
  },
  tag: {
    small: `h3`,
    medium: `h2`,
    large: `h1`,
    "x-large": `h1`,
    reset: `h1`,
  },
}
export interface Props extends Component {
  size?: `small` | `medium` | `large` | `x-large` | `reset`
  theme?: `default` | `white`
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
