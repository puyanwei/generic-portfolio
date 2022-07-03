import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { BlogPost as Component } from "./BlogPost"
import { blogPostMockProps } from "./BlogPost.mockProps"

export default {
  title: `Solar System/Blog Post`,
  component: Component,
} as ComponentMeta<typeof Component>

export const BlogPost: ComponentStory<typeof Component> = () => (
  <Component {...blogPostMockProps}>Text</Component>
)
