import { useState } from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import { GuessInput } from '../GuessInput'
import { GuessTable } from '../GuessTable'
import { checkGuess } from '@/game-helpers'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

export type IGuess = {
  id: string
  word: string
}

export function Game() {
  const [guesses, setGuesses] = useState<IGuess[]>([])

  function handleAddUserGuess(guessInput: string) {
    const newGuess = {
      id: crypto.randomUUID(),
      word: guessInput,
    }

    const nextUserGuesses = [...guesses, newGuess]

    setGuesses(nextUserGuesses)
  }

  const checkedGuesses = guesses.map((guess) => {
    const checkedGuess = checkGuess(guess.word, answer)

    return checkedGuess
  })

  return (
    <>
      <GuessTable checkedGuesses={checkedGuesses} />
      <GuessInput handleAddUserGuess={handleAddUserGuess} />
    </>
  )
}
