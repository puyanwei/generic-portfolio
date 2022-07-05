import { Heading } from "@/components/4.planets/Heading"
import { Link } from "@/components/4.planets/Link"
import { Component } from "@/types"

export interface Props extends Component {
  date: string
  title: string
  url: string
}

export function BlogPost({
  testId = `blog-post`,
  className = ``,
  date,
  title,
  url,
}: Props) {
  return (
    <div className={className} data-testid={testId}>
      <p className="text-gray-400">{date}</p>
      <Link href={url}>
        <Heading size="small">{title}</Heading>
      </Link>
    </div>
  )
}
