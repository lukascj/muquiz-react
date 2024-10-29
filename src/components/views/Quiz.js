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
const quizLength = quiz.length;

export default function Quiz() {

  const [running, endQuiz] = useState(true);
  function stop() {
    endQuiz(!running);
  };
  const [questionNum, setQuestion] = useState(1);
  const answer = quiz[questionNum-1]['name'][0];
  function nextQuestion() {
    setQuestion(questionNum+1);
  };

  let [newHigh, setHigh] = useState(false);
  function updateHigh(s) {
    localStorage.setItem('highScore', s);
    setHigh(s);
  }
  const [score, setScore] = useState(0);
  function increaseScore() {
    setScore(score+1);
  };

  const highScore = localStorage.getItem('highScore') || 0;

  const chooseAnswer = (event) => {
    const guess = event.target.textContent;
    if(guess == quiz[questionNum-1]['name'][0]) {
      increaseScore();
    }
    if(questionNum < quizLength) {
      nextQuestion();
    } else {
      if(localStorage.getItem('highScore') < score) updateHigh(score);
      stop();
    }
  }

  return <>
    <div id="quiz-wrap" className={!running && 'finished'}>
      {running ? ( 
        <>
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
                return <button className="btn" onClick={chooseAnswer} key={index}>{note['name'][0]}</button>;
              })}
          </div>
        </>
      ) : (
        <div className="result">
          <h1>~ Result ~</h1>
          {newHigh && <p>New high-score!</p>}
          <h2>Score: {score}/{quizLength}</h2>
        </div>
      )}
    </div>
  </>;
}