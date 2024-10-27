import React, { useState } from 'react';
import "./Quiz.scss";
import PianoKeys from '../PianoKeys';
import { data as musicData }  from '../../data';
import { shuffle } from '../../utility';

const params = new URLSearchParams(window.location.search);

let quiz, quizSource, btns;
if(params.get('v') == 'notes') {
  
} else if(params.get('v') == 'notes2') {
  quizSource = musicData['notes']['white'].concat(musicData['notes']['black']);
  quiz = shuffle(quizSource);
  btns = shuffle(quiz);
}

export default function Quiz() {

  const quizLength = quiz.length;
  const [questionNum, setQuestion] = useState(1);
  const answer = quiz[questionNum-1]['name'][0];
  function nextQuestion() {
    setQuestion(questionNum+1);
  };

  const [score, setScore] = useState(0);
  function increaseScore() {
    setScore(score+1);
  };

  const highScore = localStorage.getItem('highScore') || 0;

  const chooseAnswer = (event) => {
    const guess = event.target.textContent;
    console.log(quiz[questionNum-1])
    if(guess == quiz[questionNum-1]['name'][0]) {
      increaseScore();
    }
    if(questionNum < quizLength) {
      nextQuestion();
    } else {
      localStorage.setItem('highScore', score);
    }
  }

  return <>
    <div id="quiz-wrap">
      <div className="top">
        <header>
          <div>Progress: {questionNum}/{quizLength}</div>
          <div>Score: {score}</div>
          <div>High-score: {highScore}</div>
        </header>
        <div className="main">
          <PianoKeys octaves={[4]} markedKeys={[answer]}/>
        </div>
      </div>
      <div className="bottom">
        {btns.map((note, index) => {
          return <button className="btn" onClick={chooseAnswer} key={index}>{note['name'][0]}</button>
        })}
      </div>
    </div>
  </>;
}