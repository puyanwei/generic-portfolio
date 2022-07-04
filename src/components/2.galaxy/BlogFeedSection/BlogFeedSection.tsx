import { Component } from "@/types"

export interface Props extends Component {}

export function BlogFeedSection({ testId = `blog-feed-section`, className=`` }: Props) {
  return <div className={className} data-testid={testId}>blog feed section</div>
}
