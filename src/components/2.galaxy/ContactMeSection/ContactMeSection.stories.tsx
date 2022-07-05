import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ContactMeSection as Component } from "./ContactMeSection"
import { contactMeSectionMockProps } from "./ContactMeSection.mockProps"

export default {
  title: `Galaxy/Contact Me Section`,
  component: Component,
} as ComponentMeta<typeof Component>

export const ContactMeSection: ComponentStory<typeof Component> = () => (
  <Component {...contactMeSectionMockProps}>Text</Component>
)
