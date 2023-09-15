import { RefreshCcw } from 'lucide-react'
import { PropsWithChildren } from 'react'

interface BannerProps extends PropsWithChildren {
  status: 'happy' | 'sad'
  handleResetGame: () => void
}

export function Banner({ status, children, handleResetGame }: BannerProps) {
  const className = `${status} banner`

  return (
    <div className={className}>
      {children}
      <button
        className="reset-btn"
        title="Restart game"
        onClick={handleResetGame}
      >
        <RefreshCcw />
      </button>
    </div>
  )
}

export default Banner
