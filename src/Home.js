import './App.css';
import React from 'react';
import { useState } from 'react';
function Home() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [randomNumber, setRandomNumber] = useState(() => Math.floor(Math.random() * 100) + 1);

  const handleGuess = () => {
    const numGuess = parseInt(guess, 10);
    setAttempts(attempts + 1);

    if (numGuess < randomNumber) {
      setMessage('Too low!');
    } else if (numGuess > randomNumber) {
      setMessage('Too high!');
    } else {
      setMessage(`Correct! You guessed it in ${attempts + 1} attempts.`);
    }
  };

  const resetGame = () => {
    setGuess('');
    setAttempts(0);
    setMessage('');
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="container">
      <h1>Mystery Number Guessing Game</h1>
      <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} />
      <button onClick={handleGuess}>Submit Guess</button>
      <p>{message}</p>
      {message.includes('Correct') && <button onClick={resetGame}>Play Again</button>}
      <p>Attempts: {attempts}</p>
    </div>
  );
}

export default Home;
