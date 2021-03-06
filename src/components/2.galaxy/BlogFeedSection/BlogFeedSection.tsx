import { BlogPost } from "@/components/3.solarSystem/BlogPost"
import { GridContainer } from "@/components/4.planets/GridContainer"
import { Heading } from "@/components/4.planets/Heading"
import { Link } from "@/components/4.planets/Link"
import { Component } from "@/types"
import { blogFeedSectionMockProps } from "./BlogFeedSection.mockProps"

export interface Props extends Component {}

const blogposts = blogFeedSectionMockProps

export function BlogFeedSection({
  testId = `blog-feed-section`,
  className = ``,
}: Props) {
  return (
    <GridContainer className={className} data-testid={testId} id={testId}>
      <Heading size="x-large">
        Latest <strong>posts</strong>
      </Heading>
      {blogposts.map(({ date, title, url }, index) => (
        <BlogPost
          key={`${title}-${index}`}
          date={date}
          title={title}
          url={url}
        />
      ))}
      <Link
        className="text-gray-600 justify-self-end"
        href="https://bit.ly/3OTP6Jp"
        hasIcon
      >
        view more
      </Link>
    </GridContainer>
  )
}
