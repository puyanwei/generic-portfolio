import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Homepage as Component } from "./Homepage"
import { homepageMockProps } from "./Homepage.mockProps"

export default {
  title: `God/Homepage`,
  component: Component,
} as ComponentMeta<typeof Component>

export const Homepage: ComponentStory<typeof Component> = () => (
  <Component {...homepageMockProps}>Text</Component>
)
