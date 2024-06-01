import React from 'react'
import { useGameContext } from '../../contexts/GameContext'
import { GAME_STATUS } from '../../scripts/constants'
import HintPanelStyled from './HintPanelStyled'

const HintPanel = () => {
  const { hint, status } = useGameContext()

  return status === GAME_STATUS.IN_PROGRESS ? (
    <HintPanelStyled>
      {hint}
    </HintPanelStyled>
  ) : null
}

export default HintPanel
