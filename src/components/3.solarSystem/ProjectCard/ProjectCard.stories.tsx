import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ProjectCard as Component } from "./ProjectCard"
import { projectCardMockProps } from "./ProjectCard.mockProps"

export default {
  title: `Solar System/Project Card`,
  component: Component,
} as ComponentMeta<typeof Component>

export const ProjectCard: ComponentStory<typeof Component> = () => (
  <Component {...projectCardMockProps} />
)
