import { Guess } from '../Game'

interface GuessTableProps {
  guesses: Guess[]
}

export function GuessTable({ guesses }: GuessTableProps) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <p className="guess" key={guess.id}>
          {guess.word}
        </p>
      ))}
    </div>
  )
}
