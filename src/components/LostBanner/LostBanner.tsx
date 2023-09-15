import { Banner } from '../Banner'

interface LostBannerProps {
  answer: string
  handleResetGame: () => void
}

function LostBanner({ answer, handleResetGame }: LostBannerProps) {
  return (
    <Banner handleResetGame={handleResetGame} status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  )
}

export default LostBanner
