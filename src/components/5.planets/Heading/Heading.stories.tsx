import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Heading as Component } from "./Heading"
import { headingMockProps } from "./Heading.mockProps"
import { StorybookContainer } from "@/components/6.blackHole/StorybookContainer"

export default {
  title: `Planet/Heading`,
  component: Component,
} as ComponentMeta<typeof Component>

export const Heading: ComponentStory<typeof Component> = () => (
  <StorybookContainer>
    <Component {...headingMockProps} size="small">
      Small heading
    </Component>
    <Component {...headingMockProps} size="medium">
      Medium heading (default)
    </Component>
    <Component {...headingMockProps} size="large">
      Large heading
    </Component>
    <Component {...headingMockProps} size="x-large">
      Extra large heading
    </Component>
  </StorybookContainer>
)
