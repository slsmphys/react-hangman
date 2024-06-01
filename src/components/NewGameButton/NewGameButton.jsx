import React from 'react'
import { useGameContext } from '../../contexts/GameContext'
import ReloadIcon from './ReloadIcon'
import NewGameButtonStyled from './NewGameButtonStyled'

const NewGameButton = () => {
  const { handleNewGame } = useGameContext()

  return (
    <NewGameButtonStyled
      onClick={handleNewGame}
    >
      <ReloadIcon />
      <span>New Game</span>
    </NewGameButtonStyled>
  )
}

export default NewGameButton
