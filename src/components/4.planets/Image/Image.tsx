import { default as NextImage, ImageProps } from "next/image"

export interface Props extends ImageProps {
  className?: string
  testId?: string
  src: string
  alt: string
}

export function Image({
  testId = `image`,
  className = ``,
  src,
  alt,
  layout = `raw`,
  ...props
}: Props) {
  return (
    <NextImage
      className={`object-cover ${className}`}
      src={src}
      alt={alt}
      data-testid={testId}
      width="668px"
      height="384px"
      layout={layout}
      {...props}
    />
  )
}
