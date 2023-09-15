import { PropsWithChildren } from 'react'

interface BannerProps extends PropsWithChildren {
  status: 'happy' | 'sad'
}

export function Banner({ status, children }: BannerProps) {
  const className = `${status} banner`

  return <div className={className}>{children}</div>
}

export default Banner
