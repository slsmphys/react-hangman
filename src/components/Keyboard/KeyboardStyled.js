import styled from 'styled-components'

const KeyboardStyled = styled.div`
box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: min-content min-content min-content;
  grid-gap: .4rem;
  width: 100%;
  padding: .4rem;
  background-color: rgba(0, 0, 0, .8);

  .key {
    grid-column: span 2;
  }

  .void-1 {
    grid-column: span 1;
  }

  .void-3 {
    grid-column: span 3;
  }
`

export default KeyboardStyled
