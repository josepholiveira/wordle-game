import { FormEvent, useState } from 'react'
import { IGameStatuses } from '../Game'

interface GuessInputProps {
  handleAddUserGuess: (guess: string) => void
  gameStatus: IGameStatuses
}

export function GuessInput({
  handleAddUserGuess,
  gameStatus,
}: GuessInputProps) {
  const [guessInput, setGuessInput] = useState('')

  function handleSubmitGuess(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    handleAddUserGuess(guessInput)
    setGuessInput('')
  }

  return (
    <form onSubmit={handleSubmitGuess} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameStatus !== 'running'}
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Five letter word"
        value={guessInput}
        onChange={(event) => setGuessInput(event.target.value.toUpperCase())}
      />
    </form>
  )
}
