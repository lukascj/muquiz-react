import React, { useState } from 'react';
import "./Quiz.scss";
import PianoKeys from '../PianoKeys';
import { data as musicData }  from '../../data';
import { shuffle, findIndexes } from '../../utility';

const presets = ['all', 'notes', 'chords', 'scales'];
const questionFormats = ['names', 'sheets', 'keys'];
const answerFormats = ['names', 'sheets', 'keys'];

class Quiz {
  constructor(title, questions = [], answers = []) {
    this.title = title;
    this.questions; // {notes: ["C#"], allowed_answers: [1,3,6], correct_answers: [1,6]} // allowed_answers keyword all
    this.answers; // {name: "Cmaj7", notes: ["C", "E", "G", "B"]}
    this.presets = presets;
    if(this.presets.includes(title) && answers == [] && questions == []) {
      this.createFromPreset(title);
    } else {
      this.answers = answers; 
      this.questions = questions; 
    }
  }

  setQuestions(questions) {
    this.questions = questions;
  }

  setAnswers(answers) {
    this.answers = answers;
  }

  presetNotes(musicData) {
    let questions = [];
    let answers = [];
    const notes = musicData['notes']['white']
      .concat(musicData['notes']['black_sharp']);
    shuffle(notes).forEach(note => {
      answers.push({name: note, notes: [note]});
    });
    shuffle(notes).forEach(note => { 
      answersCompressed = answers.map(a => a['name']);
      questions.push({name: note, notes: [note], allowed_answers: 'all', correct_answers: findIndexes(note, answersCompressed)});
    });
    return {questions: questions, answers: answers};
  }

  presetChords(musicData) {
    let questions = [];
    let answers = [];
    let scales = [];
    for(const type in musicData['scales']) {
      scales.push(musicData['scales'][type]);
    }
    shuffle(scales).forEach(scale => {
      answers.push({name: scale['name'], notes: scale['notes']});
    });
    shuffle(scales).forEach(scale => {
      answersCompressed = answers.map(a => a['notes']);
      questions.push({name: scale['name'], notes: scale['notes'], allowed_answers: 'all', correct_answers: findIndexes(scale['notes'], answersCompressed)});
    });
    return {questions: questions, answers: answers};
  }

  presetScales(musicData) {
    let questions = [];
    let answers = [];
    shuffle(musicData['chords']).forEach(chord => {
      const name = chord['name'].join(' ');
      answers.push({name: name, notes: chord['notes']});
    });
    shuffle(musicData['notes']['white'].concat(musicData['notes']['black_sharp'])).forEach(chord => {
      answersCompressed = answers.map(a => a['notes']);
      questions.push({name: chord['name'], notes: chord['notes'], allowed_answers: 'all', correct_answers: findIndexes(chord['notes'], answersCompressed)});
    });
    return {questions: questions, answers: answers};
  }

  createFromPreset(musicData, presetName = 'all') {
    let result = {questions: [], answers: []};
    switch(presetName) {
      case this.presets[1]: // notes
        result = presetNotes(musicData);
        break;
      case this.presets[2]: // chords
        result = presetChords(musicData);
        break;
      case this.presets[3]: // scales
        result = presetScales(musicData);
        break;
      default: // all
        const resultNotes = presetNotes(musicData);
        const resultChords = presetChords(musicData);
        const resultScales = presetScales(musicData);
        result.questions = shuffle([]
          .concat(resultNotes.questions)
          .concat(resultChords.questions)
          .concat(resultScales.questions));
        result.answers = shuffle([]
          .concat(resultNotes.answers)
          .concat(resultChords.answers)
          .concat(resultScales.answers));
        break;
      this.questions = result.questions;
      this.answers = result.answers;
    }
  }
}

const params = new URLSearchParams(window.location.search);

switch(params.get('p')) { // preset
  case presets[1]: // notes
    
    break;
  case presets[2]: // chords
    
    break;
  case presets[3]: // scales
    
    break;
  default: // all

    break;
}
switch(params.get('q')) { // questions
  case questionFormats[0]: // names
    
    break;
  case questionFormats[1]: // sheets
    
    break;
  default: // keys
    
    break;
}
switch(params.get('a')) { // answers
  case questionFormats[1]: // sheets
    
    break;
  case questionFormats[2]: // keys
    
    break;
  default: // names
    
    break;
}




let quiz, quizSource, btns;
if(params.get('v') == 'notes') {
  quiz = {title: "Notes"}
  notes = musicData['notes']['white'].concat(musicData['notes']['black']);
  quiz.questions = []
  shuffle(notes).forEach(note => {
    quiz.questions
  });
  quiz = shuffle(quizSource);
  btns = shuffle(quiz);
} else if(params.get('v') == 'notes') {

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