import { Banner } from '../Banner'

interface LostBannerProps {
  answer: string
}

function LostBanner({ answer }: LostBannerProps) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  )
}

export default LostBanner
