import React, { useState, useEffect, useRef} from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import ProblemPanelStyled, { ProblemPanelWrapper } from './ProblemPanelStyled'
import { useGameContext } from '../../contexts/GameContext'

const ProblemPanel = () => {
  const { problem } = useGameContext()

  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [maxHeight, setMaxHeight] = useState(0)

  const scrollbarsRef = useRef(null)
  const scrollbarsWrapperRef = useRef(null)

  useEffect(() => {
    const scrollbarsHeight = scrollbarsRef?.current?.clientHeight
    const wrapperWidth = scrollbarsWrapperRef?.current?.clientWidth
    const scrollbarsMaxHeight = scrollbarsWrapperRef?.current?.clientHeight
    
    setHeight(scrollbarsHeight)
    setWidth(wrapperWidth)
    setMaxHeight(scrollbarsMaxHeight - 50) // subtract allowance for top-bottom padding
  })

  return (
    <ProblemPanelWrapper
      ref={scrollbarsWrapperRef}
    >
      <Scrollbars
        style={{
          height: `${height}px`,
          maxHeight: `${maxHeight}px`,
          width: `${width}px`
        }}
      >
        <ProblemPanelStyled
          ref={scrollbarsRef}
        >
           <span>{problem}</span>
        </ProblemPanelStyled>
      </Scrollbars>
    </ProblemPanelWrapper>
  )
}

export default ProblemPanel
