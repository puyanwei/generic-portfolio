import { Component } from "react"
import { BsArrowRight } from "react-icons/bs"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StorybookContainer } from "../StorybookContainer"
import { IconWrapper } from "./IconWrapper"

export default {
  title: `BlackHole/Icons`,
} as ComponentMeta<typeof Component>

export const Icons: ComponentStory<typeof Component> = () => (
  <StorybookContainer>
    <IconWrapper icon={<BsArrowRight />} testId="BsArrowRight" />
  </StorybookContainer>
)
