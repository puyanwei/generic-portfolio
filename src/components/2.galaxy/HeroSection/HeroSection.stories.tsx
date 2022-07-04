import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { HeroSection as Component } from "./HeroSection"
import { heroSectionMockProps } from "./HeroSection.mockProps"

export default {
  title: `Galaxy/Hero Section`,
  component: Component,
} as ComponentMeta<typeof Component>

export const HeroSection: ComponentStory<typeof Component> = () => (
  <Component {...heroSectionMockProps} />
)
