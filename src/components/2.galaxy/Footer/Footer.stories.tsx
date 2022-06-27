import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Footer as Component } from "./Footer"
import { footerMockProps } from "./Footer.mockProps"

export default {
  title: `Galaxy/Footer`,
  component: Component,
} as ComponentMeta<typeof Component>

export const Footer: ComponentStory<typeof Component> = () => (
  <Component {...footerMockProps} />
)
