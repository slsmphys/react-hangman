import React from 'react'
import MessageBoxStyled from './MessageBoxStyled'

const MessageBox = ({
  children
}) => (
  <MessageBoxStyled>
    {children}
  </MessageBoxStyled>
)

export default MessageBox