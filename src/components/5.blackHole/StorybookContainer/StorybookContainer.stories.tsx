import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StorybookContainer as Component } from "./StorybookContainer"
import { decoratorMockProps } from "./StorybookContainer.mockProps"

export default {
  title: `BlackHole/StorybookContainer`,
  component: Component,
} as ComponentMeta<typeof Component>

export const StorybookContainer: ComponentStory<typeof Component> = () => (
  <Component {...decoratorMockProps}>
    This is used just for laying out storybook components
  </Component>
)
