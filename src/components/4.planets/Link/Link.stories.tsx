import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Link as Component } from "./Link"
import { linkMockProps } from "./Link.mockProps"
import { StorybookContainer } from "@/components/5.blackHole/StorybookContainer"
import { StorybookHeading } from "@/components/5.blackHole/StorybookHeading"
import { IconWrapper } from "@/components/5.blackHole/Icons"
import { BsArrowRight } from "react-icons/bs"

export default {
  title: `Planet/Link`,
  component: Component,
} as ComponentMeta<typeof Component>

const icon = <IconWrapper icon={<BsArrowRight />} testId="BsArrowRight" />

export const Link: ComponentStory<typeof Component> = () => (
  <StorybookContainer>
    <div>
      <StorybookHeading>Default link</StorybookHeading>
      <Component {...linkMockProps}>view more</Component>
    </div>
    <div>
      <StorybookHeading>Link with icon</StorybookHeading>
      <Component {...linkMockProps} icon={icon}>
        view more
      </Component>
    </div>
  </StorybookContainer>
)
