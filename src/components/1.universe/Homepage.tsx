import { Component } from "@/types"

export interface Props extends Component {}

export function Homepage({ testId = `homepage` }: Props) {
  return <div data-testid={testId}>homepage</div>
}
