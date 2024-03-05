import React, { useState } from 'react';
import './guess.css';
function Guess() {
  const [guess, setGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(guess) === randomNumber) {
      setMessage('Congratulations! You guessed the correct number.');
    } else if (parseInt(guess) < randomNumber) {
      setMessage('Try a higher number.');
    } else {
      setMessage('Try a lower number.');
    }
    setGuess('');
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div>
      <h1>Guessing Game</h1>
      <p style={{textAlign:"center",fontSize:"20px"}}>Guess a number between 1 and 100:</p>
      <form onSubmit={handleSubmit}>
        <input type="number" value={guess} onChange={handleChange} />
        <button type="submit">Guess</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Guess;
