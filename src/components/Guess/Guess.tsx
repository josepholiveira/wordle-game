import { range } from '@/utils'
import { Cell } from '../Cell'

interface GuessProps {
  checkedGuess?: {
    letter: string
    status: string
  }[]
}

export function Guess({ checkedGuess }: GuessProps) {
  return (
    <p className="guess">
      {range(5).map((number) => (
        <Cell
          key={number}
          letter={checkedGuess?.[number].letter}
          status={checkedGuess?.[number].status}
          number={number}
        />
      ))}
    </p>
  )
}
