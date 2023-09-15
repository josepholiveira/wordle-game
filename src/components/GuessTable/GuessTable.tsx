import { range } from '@/utils'
import { IGuess } from '../Game'
import { NUM_OF_GUESSES_ALLOWED } from '@/constants'
import { Guess } from '../Guess'

interface GuessTableProps {
  checkedGuesses: {
    letter: string
    status: string
  }[][]
}

export function GuessTable({ checkedGuesses }: GuessTableProps) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((number) => (
        <Guess key={number} checkedGuess={checkedGuesses[number]} />
      ))}
    </div>
  )
}
