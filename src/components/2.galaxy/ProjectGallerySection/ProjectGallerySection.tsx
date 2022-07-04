import { Component } from "@/types"

export interface Props extends Component {}

export function ProjectGallerySection({ testId = `project-gallery-section`, className=`` }: Props) {
  return <div className={className} data-testid={testId}>project gallery section</div>
}
