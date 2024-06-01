import styled from 'styled-components'

const ProblemPanelStyled = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  min-height: 10rem;
  width: 100%;
  height: auto;
  color: white;
  text-align: center;
  letter-spacing: .6rem;
  line-height: 2;
  word-spacing: 1.2rem;
  font-family: 'Roboto Mono', monospace, Arial, Helvetica, sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 3.2rem;
  
  span {
    background-color: rgba(0, 0, 0, .8);
    border-radius: 1.6rem;
    margin: 0 .8rem;
    padding: 1.6rem;
  }
`

const ProblemPanelWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`

export default ProblemPanelStyled

export { ProblemPanelWrapper }
