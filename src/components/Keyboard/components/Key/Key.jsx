import React from 'react'
import { useGameContext } from '../../../../contexts/GameContext'
import { GAME_STATUS } from '../../../../scripts/constants'
import KeyStyled from './KeyStyled'

const Key = ({
  char
}) => {
  const { guessedLetters, handleGuessedLetter, status } = useGameContext()

  const isDisabled = guessedLetters.includes(char) || status === GAME_STATUS.GAME_OVER

  return (
    <KeyStyled
      className="key"
      disabled={isDisabled}
      onClick={() => handleGuessedLetter(char)}
    >
      {char}
    </KeyStyled>
  )
}

export default Key
