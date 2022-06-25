import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Header as Component } from "./Header"
import { headerMockProps } from "./Header.mockProps"

export default {
  title: `Galaxy/Header`,
  component: Component,
} as ComponentMeta<typeof Component>

export const Header: ComponentStory<typeof Component> = () => (
  <Component {...headerMockProps} />
)
