import styled from 'styled-components'

const GameWrapperStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: ${props => props.height}px;
  max-height: 100%;
  max-width: 800px;
  padding: 0;
  margin: 0 auto;
`

export default GameWrapperStyled
