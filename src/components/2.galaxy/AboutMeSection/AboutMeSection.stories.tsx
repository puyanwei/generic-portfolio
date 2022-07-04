import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { AboutMeSection as Component } from "./AboutMeSection"
import { aboutMeSectionMockProps } from "./AboutMeSection.mockProps"

export default {
  title: `Galaxy/About Me Section`,
  component: Component,
} as ComponentMeta<typeof Component>

export const AboutMeSection: ComponentStory<typeof Component> = () => (
  <Component {...aboutMeSectionMockProps}>Text</Component>
)
