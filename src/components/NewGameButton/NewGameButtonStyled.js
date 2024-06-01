import styled from 'styled-components'

const NewGameButtonStyled = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  padding: 0 1.6rem;
  border: .2rem solid #ececec;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  background-color: #0062ab;
  color: #ffffff;

  svg {
    display: flex;
    flex-shrink: 0;
    height: 2.4rem;
    width: 2.4rem;
    margin-right: .8rem;
  }

  &:hover {
    filter: brightness(80%);
    cursor: pointer;
  }
`

export default NewGameButtonStyled
