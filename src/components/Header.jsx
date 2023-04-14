import React from 'react'

const Header = ({gameOver}) => {
  return (
    <div className='header'>
        <div className='header-text'>
            <span>Rock</span>
            <span>Paper</span>
            <span>Scissors</span>
        </div>
        <div className='button-div' >
        {gameOver && <button className='button' onClick={()=>reset()}> Restart Game</button>}
         </div>
        
        
    
    </div>
  )
}

export default Header