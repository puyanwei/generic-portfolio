import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { GridContainer as Component } from "./GridContainer"
import { gridContainerMockProps } from "./GridContainer.mockProps"
import { Decorator } from "../../6.blackHole/Decorator"

export default {
  title: `Planet/Grid Container`,
  component: Component,
} as ComponentMeta<typeof Component>

export const GridContainer: ComponentStory<typeof Component> = () => (
  <Decorator>
    <h2 className="text-2xl">Default container</h2>
    <Component {...gridContainerMockProps}>
      <div className="text-2xl text-white bg-gray-500">
        <p className="grid items-center justify-center w-full h-[300px]">
          Default max width is 1280px
        </p>
      </div>
    </Component>
    <h2 className="text-2xl">No max width container</h2>
    <Component {...gridContainerMockProps} hasMaxWidth={false}>
      <div className="text-2xl text-white bg-gray-500">
        <p className="grid items-center justify-center w-full h-[300px]">
          No max width set
        </p>
      </div>
    </Component>
  </Decorator>
)
