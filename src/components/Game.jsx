import React, { useEffect, useState } from 'react'

const Game = ({gameOver,setGameOver,userChoice,computerChoice }) => {

    const[turnResult,setTurnResult]=useState(null)
    const [result,setResult] = useState('First 5 points will get win')
    const [computerPoints,setComputerPoints]=useState(0)
    const [userPoints,setUserPoints]=useState(0)

  

 useEffect(()=>{
     if(userPoints <=4 && computerPoints <=4){
         if(userChoice === "rock" && computerChoice === "scissors"){
            setUserPoints(userPoints + 1);
            setTurnResult("User Got This point");
         }
         else if (userChoice === "rock" && computerChoice === "paper"){
            setComputerPoints(computerPoints + 1)
            setTurnResult("Computer got this point")
         }

         else if(userChoice ==="scissors" && computerChoice === "paper" ){
            setUserPoints(userPoints + 1);
            setTurnResult("User Got This point");
         }

         else if(userChoice === "scissors" && computerChoice === "rock"){
            setComputerPoints(computerPoints + 1)
            setTurnResult("Computer got this point")
         }

         else if (userChoice === "paper" && computerChoice === "rock"){
            setUserPoints(userPoints + 1);
            setTurnResult("User Got This point");
         }
         else if (userChoice === "paper" && computerChoice === "scissors"){
            setComputerPoints(computerPoints + 1)
            setTurnResult("Computer got this point")
         }
         else {
            setTurnResult("Its A DRAW no one gets a point!")
         }

     }
    else  if(userPoints == 5){
        setResult("User Wins")
        setGameOver(!gameOver)
     }
     else if(computerPoints == 5){
        setResult("Computer Wins")
        setGameOver(!gameOver)
     }
 },[computerChoice,userChoice])

  return (
    <>
       <div className='score-box'>
           
            <div className='score'>  <span>User Points - </span> {userPoints}</div>

            <div className='score'> <span>Computer Points - </span>{computerPoints}</div>
        </div>
        
    <div className='result'>
        <div className='result-turn'>
         <h1>Turn Result</h1>
         <span>{turnResult}</span>
        </div>
        <div className='result-final'>
        <h1>Final Result</h1>
        <span>{result}</span>
        </div>
    </div>

   
    </>
  )
}

export default Game