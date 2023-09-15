import { FormEvent, useState } from 'react'

interface GuessInputProps {
  handleAddUserGuess: (guess: string) => void
}

export function GuessInput({ handleAddUserGuess }: GuessInputProps) {
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
