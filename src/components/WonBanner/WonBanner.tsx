import { Banner } from '../Banner'

interface WonBannerProps {
  numOfGuesses: number
  handleResetGame: () => void
}

export function WonBanner({ numOfGuesses, handleResetGame }: WonBannerProps) {
  const shouldBePlural = numOfGuesses > 1

  return (
    <Banner handleResetGame={handleResetGame} status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{`${numOfGuesses} ${
          shouldBePlural ? 'guesses' : 'guess'
        }`}</strong>
        .
      </p>
    </Banner>
  )
}
