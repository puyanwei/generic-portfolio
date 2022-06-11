import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Decorator as Component } from "./Decorator"
import { decoratorMockProps } from "./Decorator.mockProps"

export default {
  title: `BlackHole/Decorator`,
  component: Component,
} as ComponentMeta<typeof Component>

export const Decorator: ComponentStory<typeof Component> = () => (
  <Component {...decoratorMockProps}>
    This is used just for laying out storybook components
  </Component>
)
