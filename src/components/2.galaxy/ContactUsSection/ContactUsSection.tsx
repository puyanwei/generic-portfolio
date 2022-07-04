import { Component } from "@/types"

export interface Props extends Component {}

export function ContactUsSection({ testId = `contact-us-section`, className=`` }: Props) {
  return <div className={className} data-testid={testId}>contact us section</div>
}
