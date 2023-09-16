import { useCallback, useMemo, useState } from 'react'

import { GuessInput } from '../GuessInput'
import { GuessTable } from '../GuessTable'
import { checkGuess } from '@/game-helpers'
import { NUM_OF_GUESSES_ALLOWED } from '@/constants'
import { WonBanner } from '../WonBanner'
import LostBanner from '../LostBanner/LostBanner'
import { sample } from '@/utils'
import { WORDS } from '@/data'

export type IGuess = {
  id: string
  word: string
}

export type IGameStatuses = 'running' | 'won' | 'lost'

export function Game() {
  const [answer, setAnswer] = useState(() => {
    return sample(WORDS)
  })

  const [guesses, setGuesses] = useState<IGuess[]>([])
  const [gameStatus, setGameStatus] = useState<IGameStatuses>('running')

  console.log({ answer })

  const handleResetGame = useCallback(() => {
    const nextAnswer = sample(WORDS)

    setAnswer(nextAnswer)
    setGuesses([])
    setGameStatus('running')
  }, [])

  function handleAddUserGuess(guessInput: string) {
    const newGuess = {
      id: crypto.randomUUID(),
      word: guessInput,
    }

    const nextUserGuesses = [...guesses, newGuess]

    if (guessInput === answer) {
      setGameStatus('won')
    } else if (nextUserGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
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
      won: (
        <WonBanner
          handleResetGame={handleResetGame}
          numOfGuesses={guesses.length}
        />
      ),
      lost: <LostBanner answer={answer} handleResetGame={handleResetGame} />,
    }
  }, [guesses.length, answer, handleResetGame])

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
