import styled from 'styled-components'

const bgColor = {
  WIN: '#319a3e',
  LOSE: '#db1a1f'
}

const ResultPanelStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2.5rem;
  margin: 0 auto;
  height: 4.4rem;
  line-height: 1;
  font-family: 'Arial';
  font-size: 2.2rem;
  font-wight: 600;
  border: .2rem solid #ffffff;
  border-radius: 2.2rem;
  background-color: ${ props => bgColor[props.result]};
  color: #ffffff;
  text-transform: uppercase;
`

export default ResultPanelStyled
