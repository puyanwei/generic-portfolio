import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StorybookHeading as Component } from "./StorybookHeading"
import { storybookHeadingMockProps } from "./StorybookHeading.mockProps"
import { StorybookContainer } from "../StorybookContainer"

export default {
  title: `Blackhole/Storybook Heading`,
  component: Component,
} as ComponentMeta<typeof Component>

export const StorybookHeading: ComponentStory<typeof Component> = () => (
  <StorybookContainer>
    <Component {...storybookHeadingMockProps}>Default heading</Component>
    <Component {...storybookHeadingMockProps} size="small">
      Small Heading
    </Component>
  </StorybookContainer>
)
