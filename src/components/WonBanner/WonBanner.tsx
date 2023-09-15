import { Banner } from '../Banner'

interface WonBannerProps {
  numOfGuesses: number
}

export function WonBanner({ numOfGuesses }: WonBannerProps) {
  const shouldBePlural = numOfGuesses > 1

  return (
    <Banner status="happy">
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
