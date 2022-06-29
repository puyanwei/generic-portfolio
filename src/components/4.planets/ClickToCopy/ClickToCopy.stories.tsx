import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ClickToCopy as Component } from "./ClickToCopy"

export default {
  title: `Planet/Click To Copy`,
  component: Component,
} as ComponentMeta<typeof Component>

export const ClickToCopy: ComponentStory<typeof Component> = () => (
  <Component>Clicking on me copies this text to the notepad</Component>
)
