import { Component } from "@/types"
import { nullifyAndWarn } from "../../../utils/helpers"
import { ColumnCount, GapSize } from "./types"

export interface Props extends Component {
  hasMaxWidth?: boolean
  columns?: ColumnCount
  gap?: GapSize
}

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
}

export function GridContainer({
  testId = `grid-container`,
  children,
  className = ``,
  hasMaxWidth = true,
  columns: providedColumns = 1,
  gap: providedGap = `medium`,
}: Props) {
  if (!children) return nullifyAndWarn(`No children found`)

  const maxWidth = hasMaxWidth ? `max-w-[1280px]` : `-mx-16`
  const columns = layout.columns[providedColumns]
  const gap = layout.gap[providedGap]

  return (
    <div
      className={`min-w-[320px] mx-auto grid ${gap} ${columns} ${maxWidth} ${className}`}
      data-testid={testId}
    >
      {children}
    </div>
  )
}
