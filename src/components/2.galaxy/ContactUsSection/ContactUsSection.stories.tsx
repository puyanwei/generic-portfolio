import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ContactUsSection as Component } from "./ContactUsSection"
import { contactUsSectionMockProps } from "./ContactUsSection.mockProps"

export default {
  title: `Galaxy/Contact Us Section`,
  component: Component,
} as ComponentMeta<typeof Component>

export const ContactUsSection: ComponentStory<typeof Component> = () => (
  <Component {...contactUsSectionMockProps}>Text</Component>
)
