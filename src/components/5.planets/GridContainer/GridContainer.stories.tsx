import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { GridContainer as Component } from "./GridContainer"
import { StorybookContainer } from "@/components/6.blackHole/StorybookContainer"
import { StorybookHeading } from "@/components/6.blackHole/StorybookHeading"

export default {
  title: `Planet/Grid Container`,
  component: Component,
} as ComponentMeta<typeof Component>

export const GridContainer: ComponentStory<typeof Component> = () => (
  <StorybookContainer>
    <StorybookHeading>Default container</StorybookHeading>
    <Component>
      <div className="text-2xl text-white bg-gray-500">
        <p className="grid items-center justify-center w-full h-[300px]">
          Default max width is 1280px
        </p>
      </div>
    </Component>
    <StorybookHeading>No max width container</StorybookHeading>
    <Component hasMaxWidth={false}>
      <div className="text-2xl text-white bg-gray-500">
        <p className="grid items-center justify-center w-full h-[300px]">
          No max width set
        </p>
      </div>
    </Component>
    <StorybookHeading>2 columns</StorybookHeading>
    <Component columns={2}>
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
    </Component>
    <StorybookHeading>4 columns</StorybookHeading>
    <Component columns={4}>
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
    </Component>
    <StorybookHeading>6 columns</StorybookHeading>
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
    <StorybookHeading>12 columns</StorybookHeading>
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
    <StorybookHeading>Small gap</StorybookHeading>
    <Component columns={4} gap="small">
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
    </Component>
    <StorybookHeading>Medium default gap</StorybookHeading>
    <Component columns={4} gap="medium">
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
    </Component>
    <StorybookHeading>Large gap</StorybookHeading>
    <Component columns={4} gap="large">
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
      <div className="text-2xl text-white bg-gray-500 h-[100px]" />
    </Component>
  </StorybookContainer>
)
