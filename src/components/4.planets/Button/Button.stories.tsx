import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Button as Component } from "./Button"
import { buttonMockProps } from "./Button.mockProps"
import { StorybookContainer } from "@/components/5.blackHole/StorybookContainer"

export default {
  title: `Planet/Button`,
  component: Component,
} as ComponentMeta<typeof Component>

export const Button: ComponentStory<typeof Component> = () => (
  <StorybookContainer>
    <Component {...buttonMockProps}>Text</Component>
  </StorybookContainer>
)
