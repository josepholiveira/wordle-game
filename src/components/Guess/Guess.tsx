import { range } from '@/utils'
import { IGuess } from '../Game'

interface GuessProps {
  guess?: IGuess
}

export function Guess({ guess }: GuessProps) {
  return (
    <p className="guess">
      {range(5).map((number) => (
        <span key={number} className="cell">
          {guess?.word[number]}
        </span>
      ))}
    </p>
  )
}
