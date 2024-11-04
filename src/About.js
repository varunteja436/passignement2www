import './App.css';
import React from 'react';
import { useState } from 'react';

function About() {
  const [fact, setFact] = useState('');

  const showFunFact = () => {
    const facts = [
      'React is maintained by Facebook.',
      '1,000 is the only number with an "A" in it from One to One Thousand.',
      'The addition of numbers on the opposite side of dice always equal seven.',
      'When two even numbers are added, the sum is always a even number.'
    ];
    setFact(facts[Math.floor(Math.random() * facts.length)]);
  };

  return (
    <div className="container">
      <h1>About This App</h1>
      <p>This app includes a guessing game, a contact form, and a todo list.</p>
      <button onClick={showFunFact}>Show Fun Fact</button>
      <p>{fact}</p>
    </div>
  );
}

export default About;
