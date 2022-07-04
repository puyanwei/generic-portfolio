import { Component } from "@/types"

export interface Props extends Component {}

export function AboutMeSection({ testId = `about-me-section`, className=`` }: Props) {
  return <div className={className} data-testid={testId}>about me section</div>
}
