import { range } from '@/utils'
import { IGuess } from '../Game'
import { NUM_OF_GUESSES_ALLOWED } from '@/constants'
import { Guess } from '../Guess'

interface GuessTableProps {
  guesses: IGuess[]
}

export function GuessTable({ guesses }: GuessTableProps) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((number) => (
        <Guess key={number} guess={guesses[number]} />
      ))}
    </div>
  )
}
