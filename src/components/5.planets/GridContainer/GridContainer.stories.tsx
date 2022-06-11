import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { GridContainer as Component } from "./GridContainer"
import { gridContainerMockProps } from "./GridContainer.mockProps"

export default {
  title: `Planet/Grid Container`,
  component: Component,
} as ComponentMeta<typeof Component>

export const GridContainer: ComponentStory<typeof Component> = () => (
  <Component {...gridContainerMockProps}>
    <div className="text-2xl text-white bg-gray-500">
      <p className="grid items-center justify-center w-full h-[300px]">
        Default max width is 1280px
      </p>
    </div>
    <div className="text-2xl text-white bg-gray-500">
      <p className="grid items-center justify-center w-full h-[300px]">
        No max width set
      </p>
    </div>
  </Component>
)