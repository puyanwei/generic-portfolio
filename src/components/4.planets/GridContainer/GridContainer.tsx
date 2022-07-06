import { Component } from "@/types"
import { nullifyAndWarn } from "../../../utils/helpers"
import { Alignment, ColumnCount, GapSize } from "./types"

const layout = {
  columns: {
    1: `grid-cols-1`,
    2: `grid-cols-2`,
    3: `grid-cols-3`,
    4: `grid-cols-4`,
    5: `grid-cols-5`,
    6: `grid-cols-6`,
    7: `grid-cols-7`,
    8: `grid-cols-8`,
    9: `grid-cols-9`,
    10: `grid-cols-10`,
    11: `grid-cols-11`,
    12: `grid-cols-12`,
  },
  gap: {
    small: `gap-4`,
    medium: `gap-6`,
    large: `gap-8`,
  },
  alignment: {
    left: `justify-items-start`,
    center: `justify-items-center`,
    right: `justify-items-end`,
  },
}
export interface Props extends Component {
  hasMaxWidth?: boolean
  columns?: ColumnCount
  gap?: GapSize
  alignment?: Alignment
  id?: string
}

export function GridContainer({
  testId = `grid-container`,
  children,
  className = ``,
  hasMaxWidth = true,
  columns: providedColumns = 1,
  gap: providedGap = `medium`,
  alignment: providedAlignment = `left`,
  id,
}: Props) {
  if (!children) return nullifyAndWarn(`No children found`)

  const maxWidth = hasMaxWidth ? `max-w-[1280px]` : `-mx-16`
  const columns = layout.columns[providedColumns]
  const gap = layout.gap[providedGap]
  const alignment = layout.alignment[providedAlignment]

  return (
    <section
      className={`min-w-[320px] mx-auto grid my-16 ${gap} ${columns} ${alignment} ${maxWidth} ${className}`}
      data-testid={testId}
      id={id}
    >
      {children}
    </section>
  )
}
