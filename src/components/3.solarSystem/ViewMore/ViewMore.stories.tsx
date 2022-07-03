import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ViewMore as Component } from "./ViewMore"
import { viewMoreMockProps } from "./ViewMore.mockProps"
import { StorybookContainer } from "@/components/5.blackHole/StorybookContainer"
import { StorybookHeading } from "@/components/5.blackHole/StorybookHeading"
import { BsArrowRight } from "react-icons/bs"
import { IconWrapper } from "@/components/5.blackHole/Icons"

export default {
  title: `Solar System/View More`,
  component: Component,
} as ComponentMeta<typeof Component>

const icon = <IconWrapper icon={<BsArrowRight />} testId="BsArrowRight" />

export const ViewMore: ComponentStory<typeof Component> = () => (
  <StorybookContainer>
    <div>
      <StorybookHeading>Default</StorybookHeading>
      <Component {...viewMoreMockProps} />
    </div>
    <div>
      <StorybookHeading>With Icon</StorybookHeading>
      <Component {...viewMoreMockProps} icon={icon} />
    </div>
  </StorybookContainer>
)
