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
  layout = `fill`,
  objectFit = `contain`,
  ...props
}: Props) {
  return (
    <span className={`relative inline-block h-[384px] w-[668px] ${className}`}>
      <NextImage
        src={src}
        layout={layout}
        objectFit={objectFit}
        alt={alt}
        data-testid={testId}
        {...props}
      />
    </span>
  )
}
