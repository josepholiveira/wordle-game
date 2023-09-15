import { FormEvent, useState } from 'react'

export function GuessInput() {
  const [guess, setGuess] = useState('')

  function handleSubmitGuess(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log({ guess })

    setGuess('')
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
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  )
}
