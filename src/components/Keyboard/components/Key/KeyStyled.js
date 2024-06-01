import styled from 'styled-components'

const KeyStyled = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.4rem;
  border-radius: .4rem;
  font-family: "Roboto Mono", monospace, Arial, Helvetica, sans-serif;
  font-size: 1.8rem;
  background-color: #323232;
  color: #ececec;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: #536878;
    color: #708090;
    cursor: not-allowed;
  }
`

export default KeyStyled
