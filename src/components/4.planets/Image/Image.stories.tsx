import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Image as Component } from "./Image"
import { imageMockProps } from "./Image.mockProps"

export default {
  title: `Image`,
  component: Component,
} as ComponentMeta<typeof Component>

export const Image: ComponentStory<typeof Component> = () => (
  <Component {...imageMockProps}>Text</Component>
)
