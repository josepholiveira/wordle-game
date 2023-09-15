import { useMemo, useState } from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import { GuessInput } from '../GuessInput'
import { GuessTable } from '../GuessTable'
import { checkGuess } from '@/game-helpers'
import { NUM_OF_GUESSES_ALLOWED } from '@/constants'
import { WonBanner } from '../WonBanner'
import LostBanner from '../LostBanner/LostBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS)

// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

export type IGuess = {
  id: string
  word: string
}

export type IGameStatuses = 'running' | 'won' | 'lost'

export function Game() {
  const [guesses, setGuesses] = useState<IGuess[]>([])
  const [gameStatus, setGameStatus] = useState<IGameStatuses>('running')

  function handleAddUserGuess(guessInput: string) {
    const newGuess = {
      id: crypto.randomUUID(),
      word: guessInput,
    }

    const nextUserGuesses = [...guesses, newGuess]

    if (guessInput === answer) {
      setGameStatus('won')
    }

    if (nextUserGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }

    setGuesses(nextUserGuesses)
  }

  const checkedGuesses = guesses.map((guess) => {
    const checkedGuess = checkGuess(guess.word, answer)

    return checkedGuess
  })

  const banners = useMemo(() => {
    return {
      won: <WonBanner numOfGuesses={guesses.length} />,
      lost: <LostBanner answer={answer} />,
    }
  }, [guesses.length])

  return (
    <>
      <GuessTable checkedGuesses={checkedGuesses} />
      <GuessInput
        gameStatus={gameStatus}
        handleAddUserGuess={handleAddUserGuess}
      />

      {gameStatus !== 'running' && banners[gameStatus]}
    </>
  )
}
