import React from 'react'

const Play = ({userChoice , computerChoice ,gameOver ,setComputerChoice ,setUserChoice}) => {
    
    const choices=['rock','paper','scissors']

    const  handleClick = (value)=>{
        setUserChoice(value)
        generateComputerChoice();
    } 
    const  generateComputerChoice = ()=>{
        const randomChoice= choices[Math.floor(Math.random()*3)];
        setComputerChoice(randomChoice)
    }

  return (
    <div className='choice'>
    <div className='choice-img'>
      <div className='choice-user'>
        <img  className='user-hand' src={`../img/${userChoice}.png`}/>
      </div>

      <div className='choice-computer'>
       <img  className='computer-hand' src={`../img/${computerChoice}.png`}/>
      </div>
    </div>

    <div className='choice-btn'>
      <div className='button-div'>
           {
             choices.map((choice,index)=>
                <button className='button' key={index} onClick={()=>  handleClick(choice)} disabled={gameOver}>
                    {choice} 
                 </button>
                )
            }
           
       </div>
    </div>
  </div>
  )
}

export default Play