import React from 'react'
import Key from './components/Key'
import { KEYBOARD_LAYOUT } from '../../scripts/constants'
import KeyboardStyled from './KeyboardStyled'

const Keyboard = () => (
  <KeyboardStyled>
    {KEYBOARD_LAYOUT.map(k => {
      if (k === '' || k === ' ') {
        return (
          <div
            className={k === '' ? 'void-1' : 'void-3'}
            key={`void-${k}`}
          >    
          </div>
        )
      }
      
      return (
        <Key
          className="key"
          key={`key-${k}`}
          char={k}
        />
      )
    })}
  </KeyboardStyled>
)

export default Keyboard
