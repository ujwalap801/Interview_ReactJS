import React, { useState } from 'react';
import './styles.css'

function GuessTheNumber() {

  const randomNumber = () => Math.floor(Math.random() * 100) + 1;

  const [originalNum, setOriginalNum] = useState(randomNumber);

  const [guess, setGuess] = useState('');
  const [msg, setMsg] = useState('');
  const [attempt, setAttempt] = useState(0);
  
  // Function to handle guess checking
  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 100) {

      setMsg("Please enter a number between 1 and 100");
      return;
    }


setMsg('');
    if (num === originalNum) {
      setMsg(`Congratulations! You guessed the number in ${attempt+1} attempts.`)
    } else if (num > originalNum) {
      setAttempt(attempt + 1);
      setMsg("Too High! Try again.")
    } else if (num < originalNum) {
      setAttempt(attempt + 1);
      setMsg("Too Low! Try again.")

    }
  };

  // Function to reset the game
  const resetGame = () => {
    setOriginalNum(randomNumber());
    setMsg('');
    setGuess('');
    setAttempt(0);
  };

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"50px 0"}}>
      <h2>Guess the Number</h2>

      <input
        id="guess-input"
        value={guess}
      onChange={(e)=>setGuess(e.target.value)}
        placeholder="Enter a number between 1 and 100"
        style={{width:"300px",padding:"5px"}}
   
      />

      <div style={{ margin: '20px 0', display: 'flex', justifyContent: 'center', gap:'20px' }}>
        <button onClick={handleGuess}>Check Guess</button>
        <button onClick={resetGame}>Reset Game</button>
      </div>

      {msg &&<p>{msg}</p>}
    </div>
  );
}

export default GuessTheNumber;
