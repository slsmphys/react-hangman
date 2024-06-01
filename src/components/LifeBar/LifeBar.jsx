import React from 'react'
import Heart from './Heart'
import { useGameContext } from '../../contexts/GameContext'
import { START_LIVES } from '../../scripts/constants'
import LifeBarStyled from './LifeBarStyled'

const LifeBar = () => {
  const { lives } = useGameContext()

  const health = (lives / START_LIVES) * 100

  return (
    <LifeBarStyled health={health}>
      <div className="life-bar">
        <div className="life-bar-health"></div>
      </div>
      <Heart />
    </LifeBarStyled>)
}

export default LifeBar
