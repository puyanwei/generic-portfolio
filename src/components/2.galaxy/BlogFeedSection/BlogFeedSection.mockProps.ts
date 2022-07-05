type BlogFeedKeys = `date` | `title` | `url`
type BlogFeedData = Record<BlogFeedKeys, string>

export const blogFeedSectionMockProps: BlogFeedData[] = [
  {
    date: `Yesterday`,
    title: `How do you make a site faster?`,
    url: `/how-do-you-make-a-site-faster`,
  },
  {
    date: `13th June`,
    title: `I wake up at 2am and so should you`,
    url: `/I-wake-up-at-2am-and-so-should-you`,
  },
  {
    date: `14th June`,
    title: `100 projects in 100 days`,
    url: `/100-projects-in-100-days`,
  },
  {
    date: `15th June`,
    title: `Code with your left hand only challenge`,
    url: `/Code-with-your-left-hand-only-challenge`,
  },
]
