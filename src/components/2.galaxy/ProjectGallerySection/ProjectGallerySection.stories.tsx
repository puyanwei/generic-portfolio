import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ProjectGallerySection as Component } from "./ProjectGallerySection"
import { projectGallerySectionMockProps } from "./ProjectGallerySection.mockProps"

export default {
  title: `Galaxy/Project Gallery Section`,
  component: Component,
} as ComponentMeta<typeof Component>

export const ProjectGallerySection: ComponentStory<typeof Component> = () => (
  <Component {...projectGallerySectionMockProps} />
)
