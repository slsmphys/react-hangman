import React, { createContext, useContext, useState, useEffect } from 'react'
import {
  AUTO_REVEAL_CHARACTERS,
  DEFAULT_HINT,
  START_LIVES,
  RESULT_LOSE,
  RESULT_WIN,
  GAME_STATUS
} from '../scripts/constants'
import { games } from '../datastore'

const GameContextProvider = ({ children }) => {
  const [ lives, setLives ] = useState(START_LIVES)
  const [ hint, setHint ] = useState(DEFAULT_HINT)
  const [ guessedLetters, setGuessedLetters ] = useState([])
  const [ problem, setProblem ] = useState('')
  const [ solution, setSolution ] = useState('')
  const [ inProgress, setInProgress ] = useState(false)
  const [ result, setResult ] = useState(RESULT_LOSE)
  const [ status, setStatus ] = useState(GAME_STATUS.GAME_OVER)

  useEffect(() => {
    fetchNewGame()
  }, [])

  useEffect(() => {
    if (lives === 0) {
      setResult(RESULT_LOSE)
      setProblem(solution)
      setInProgress(false)
      setStatus(GAME_STATUS.GAME_OVER)
    }
  }, [ lives ])

  function fetchNewGame() {
    const randomIndex = Math.floor(Math.random() * games.length)
    const newGame = games[randomIndex]
    const gameBoard = newGame && fetchNewGameBoard(newGame.game.toUpperCase())

    setLives(START_LIVES)
    setGuessedLetters([])
    setHint(newGame.hint)
    setSolution(newGame.game.toUpperCase())
    setProblem(gameBoard)
    setInProgress(true)
    setStatus(GAME_STATUS.IN_PROGRESS)
  }

  function fetchNewGameBoard(game) {
    let maskedGame = game.split('').map(g => '_')

    AUTO_REVEAL_CHARACTERS.forEach(c => {
      if (game.indexOf(c) > -1) {
        for (const g in game) {
          if (game.charAt(g) === c) {
            maskedGame[g] = c
          }
        }
      }
    })

    maskedGame = maskedGame.join('')

    return maskedGame
  }

  function handleNewGame() {
    fetchNewGame()
  }

  function handleGuessedLetter(letter) {
    const currentGuessedLetters = [ ...guessedLetters ]
    let updatedPuzzle = problem.split('')

    // is the letter in the puzzle
    if (solution.indexOf(letter) > -1) {
      // guessed letter exists in solution
      for (const s in solution) {
        if (solution.charAt(s) === letter) {
          updatedPuzzle[s] = letter
        }
      }
    } else {
      setLives(l => l - 1)
    }

    setProblem(updatedPuzzle.join(''))

    currentGuessedLetters.push(letter)

    setGuessedLetters(currentGuessedLetters)

    if (updatedPuzzle.join('') === solution && lives > 0) {
      setResult(RESULT_WIN)
      setInProgress(false)
      setStatus(GAME_STATUS.GAME_OVER)
    }
  }

  const context = {
    lives,
    hint,
    guessedLetters,
    problem,
    solution,
    inProgress,
    status,
    result,
    handleNewGame,
    handleGuessedLetter
  }

  return (
    <GameContext.Provider value={context}>
      {children}
    </GameContext.Provider>
  )
}

const GameContext = createContext()

export default GameContextProvider

export const useGameContext = () => useContext(GameContext)
