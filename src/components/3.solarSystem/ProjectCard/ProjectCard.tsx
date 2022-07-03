import { Component } from "@/types"
import { Image } from "@/components/4.planets/Image"

export interface Props extends Component {
  src: string
  alt: string
  caption: string
}

export function ProjectCard({
  testId = `project-card`,
  className = ``,
  src,
  alt,
  caption,
}: Props) {
  return (
    <div className={className} data-testid={testId}>
      <Image src={src} alt={alt} />
      <p className="my-4">{caption}</p>
    </div>
  )
}
