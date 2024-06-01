import React, {useState, useEffect} from 'react'
import GameWrapperStyled from './GameWrapperStyled'
import MessageBox from '../MessageBox'

const GameWrapper = ({ children }) => {
  window.addEventListener('resize', appHeight)

  const [ height, setHeight ] = useState(0)
  const [ showError, setShowError ] = useState(false)

  useEffect(() => {
    appHeight()
  })

  useEffect(() => {
    setShowError(height < 450)
  }, [height])

  function appHeight() {
    setHeight(window.innerHeight)
  }
  
  return (
    <>
      {showError ? (
        <MessageBox>
          <h1>Sorry!</h1>
          <p>This app requires screens larger than 450px tall. If you are using a mobile device in landscape mode, try rotating it into portrait mode.</p>
          <p>Thank you</p>
        </MessageBox>
      ) : (
        <GameWrapperStyled
          height={height}
        >
          {children}
        </GameWrapperStyled>
      )}
    </>
  )
}

export default GameWrapper
