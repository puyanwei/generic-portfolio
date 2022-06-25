import { default as NextImage, ImageProps } from "next/image"

export interface Props extends ImageProps {
  className?: string
  testId?: string
}

export function Image({
  testId = `image`,
  className = ``,
  src,
  alt,
  layout = `fill`,
  ...props
}: Props) {
  return (
    <NextImage
      className={className}
      src={src}
      layout={layout}
      alt={alt}
      data-testid={testId}
      {...props}
    />
  )
}
