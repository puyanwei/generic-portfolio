import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Link as Component } from "./Link"
import { linkMockProps } from "./Link.mockProps"

export default {
  title: `Planet/Link`,
  component: Component,
} as ComponentMeta<typeof Component>

export const Link: ComponentStory<typeof Component> = () => (
  <Component {...linkMockProps}>view more</Component>
)
