import styled from 'styled-components'

const LifeBarStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  height: 4.4rem;
  max-width: 25.0rem;
  padding: 0 1.2rem;
  background-color: rgba(0, 0, 0, .8);
  border-radius: .8rem;

  @media (min-width: 768px) {
    max-width: 50%;
  }

  .life-bar {
    box-sizing: border-box;
    display: flex;
    justify-content: left;
    height: 2rem;
    width: 100%;
    border: .4rem solid #ececec;
    border-radius: 1rem;
    background-color: #000000;
  }

  .life-bar-health {
    box-sizing: border-box;
    display: flex;
    height: 1.2rem;
    width: ${props => props.health}%;
    background: ${props => props.health > 21 ? '#319a3e' : '#db1a1f'};
    border-top-right-radius:  ${props => props.health === 100 ? '.5rem' : '0'};
    border-bottom-right-radius:  ${props => props.health === 100 ? '.5rem' : '0'};
    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem;
    content: "";
  }

  svg {
    display: flex;
    flex-shrink: 0;
    margin-left: .8rem;
    color: #db1a1f;
    width: 2.4rem;
    height: 2.4rem;
  }
`

export default LifeBarStyled
