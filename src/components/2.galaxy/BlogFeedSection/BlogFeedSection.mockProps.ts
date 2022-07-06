type BlogFeedKeys = `date` | `title` | `url`
type BlogFeedData = Record<BlogFeedKeys, string>

export const blogFeedSectionMockProps: BlogFeedData[] = [
  {
    date: `Yesterday`,
    title: `How do you make a site faster?`,
    url: `https://bit.ly/3RcCj6l`,
  },
  {
    date: `13th June`,
    title: `I wake up at 2am and so should you`,
    url: `https://bit.ly/3nIOt9F`,
  },
  {
    date: `14th June`,
    title: `100 projects in 100 days`,
    url: `https://bit.ly/3ImEi4g`,
  },
  {
    date: `15th June`,
    title: `Code with your left hand only challenge`,
    url: `https://bit.ly/3yKGrDq`,
  },
]
