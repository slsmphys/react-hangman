import React from 'react'
import GameContextProvider from './contexts/GameContext'
import GameWrapper from './components/GameWrapper'
import NewGameButton from './components/NewGameButton'
import HintPanel from './components/HintPanel'
import ResultPanel from './components/ResultPanel'
import Keyboard from './components/Keyboard'
import ProblemPanel from './components/ProblemPanel'
import LifeBar from './components/LifeBar'

const App = () => (
  <GameContextProvider>
    <GameWrapper>
      <header>
        <div className="header-top-bar">
          <NewGameButton />
          <LifeBar />
        </div>
        <div className="header-display-panel">
          <HintPanel />
          <ResultPanel />
        </div>
      </header>      
      <main id='main'>
        <ProblemPanel />
      </main>
      <footer>
        <Keyboard />
      </footer>
    </GameWrapper>
  </GameContextProvider>
)

export default App
