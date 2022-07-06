import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Link as Component } from "./Link"
import { linkMockProps } from "./Link.mockProps"
import { StorybookContainer } from "@/components/5.blackHole/StorybookContainer"
import { StorybookHeading } from "@/components/5.blackHole/StorybookHeading"

export default {
  title: `Planet/Link`,
  component: Component,
} as ComponentMeta<typeof Component>

export const Link: ComponentStory<typeof Component> = () => (
  <StorybookContainer>
    <div>
      <StorybookHeading>Default link</StorybookHeading>
      <Component {...linkMockProps}>view more</Component>
    </div>
    <div>
      <StorybookHeading>Default link</StorybookHeading>
      <Component {...linkMockProps} hasIcon>
        view more
      </Component>
    </div>
  </StorybookContainer>
)
