import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { BlogFeedSection as Component } from "./BlogFeedSection"
import { blogFeedSectionMockProps } from "./BlogFeedSection.mockProps"

export default {
  title: `Galaxy/Blog Feed Section`,
  component: Component,
} as ComponentMeta<typeof Component>

export const BlogFeedSection: ComponentStory<typeof Component> = () => (
  <Component {...blogFeedSectionMockProps}>Text</Component>
)
