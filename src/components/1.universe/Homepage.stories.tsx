import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Homepage as Component } from "./Homepage"

export default {
  title: `Universe/Homepage`,
  component: Component,
} as ComponentMeta<typeof Component>

export const Homepage: ComponentStory<typeof Component> = () => <Component />
