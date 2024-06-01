import React from 'react'
import { useGameContext } from '../../contexts/GameContext'
import { RESULT_WIN } from '../../scripts/constants'
import ResultPanelStyled from './ResultPanelStyled'

const ResultPanel = () => {
  const { result, inProgress } = useGameContext()

  const message = result === RESULT_WIN ? 'Congratulations!!!' : 'Bad Luck'

  return !inProgress ? (
    <ResultPanelStyled
      result={result}
    >
      <span>{message}</span>
    </ResultPanelStyled>
  ) : null
}

export default ResultPanel
