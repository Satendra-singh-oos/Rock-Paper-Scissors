import { useState } from 'react'

import Header from './components/Header'
import Play from './components/Play'
import Game from './components/Game'

function App() {

  const [gameOver,setGameOver]=useState(false)
  const [userChoice,setUserChoice]=useState('rock')
  const [computerChoice,setComputerChoice]=useState('rock')



  return (
    <div className="App">
      <Header gameOver={gameOver} />
      <Play userChoice={userChoice} computerChoice={computerChoice} gameOver={gameOver} setComputerChoice={setComputerChoice} setUserChoice={setUserChoice}/>
      <Game  gameOver={gameOver} setGameOver={setGameOver}  userChoice={userChoice} computerChoice={computerChoice}/>

    
    </div>
  )
}

export default App
