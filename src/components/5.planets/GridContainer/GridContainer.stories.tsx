import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { GridContainer as Component } from "./GridContainer"
import { Decorator } from "../../6.blackHole/Decorator"

export default {
  title: `Planet/Grid Container`,
  component: Component,
} as ComponentMeta<typeof Component>

export const GridContainer: ComponentStory<typeof Component> = () => (
  <Decorator>
    <h2 className="text-2xl">Default container</h2>
    <Component>
      <div className="text-2xl text-white bg-gray-500">
        <p className="grid items-center justify-center w-full h-[300px]">
          Default max width is 1280px
        </p>
      </div>
    </Component>
    <h2 className="text-2xl">No max width container</h2>
    <Component hasMaxWidth={false}>
      <div className="text-2xl text-white bg-gray-500">
        <p className="grid items-center justify-center w-full h-[300px]">
          No max width set
        </p>
      </div>
    </Component>
    <h2 className="text-2xl">2 columns</h2>
    <Component columns={2}>
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
    </Component>
    <h2 className="text-2xl">4 columns</h2>
    <Component columns={4}>
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
    </Component>
    <h2 className="text-2xl">6 columns</h2>
    <Component columns={6}>
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
    </Component>
    <h2 className="text-2xl">12 columns</h2>
    <Component columns={12}>
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
    </Component>
    <h2 className="text-2xl">Small gap</h2>
    <Component columns={4} gap="small">
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
    </Component>
    <h2 className="text-2xl">Medium default gap</h2>
    <Component columns={4} gap="medium">
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
    </Component>
    <h2 className="text-2xl">Large gap</h2>
    <Component columns={4} gap="large">
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
    </Component>
  </Decorator>
)
