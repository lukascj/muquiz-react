import React, { useState } from 'react';
import "./Quiz.scss";
import PianoKeys from '../PianoKeys';
import { data as musicData }  from '../../data';
import { shuffle, findIndexes } from '../../utility';

const presets = ['all', 'notes', 'chords', 'scales'];
const questionFormats = ['names', 'sheets', 'keys'];
const answerFormats = ['names', 'sheets', 'keys'];

class QuizObj {
  constructor(title, questions = [], answers = []) {
    this.presets = presets;
    this.title = title;
    this.questions; // {notes: ["C#"], allowed_answers: [1,3,6], correct_answers: [1,6]} // allowed_answers keyword all
    this.answers; // {name: "Cmaj7", notes: ["C", "E", "G", "B"]}
    if(this.presets.includes(title) && (answers.length == 0 || questions.length == 0)) {
      this.createFromPreset(musicData, title);
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
    // Spara alla noter till samma array
    const notes = musicData['notes']['white']
      .concat(musicData['notes']['black_sharp']);
    // Blanda noter och lägg in dem i listan på svar 
    // Ett answer-objekt är strukturerad samma oavsett preset; "notes: [note]" är ju egentligen onödigt
    shuffle(notes).forEach(note => {
      answers.push({name: note, notes: [note]});
    });
    // Blanda noter och lägg dem i listan på frågor.
    shuffle(notes).forEach(note => { 
      const answersCompressed = answers.map(a => a['name']);
      questions.push({
        name: note, 
        notes: [note], 
        allowed_answers: 'all', 
        correct_answers: findIndexes(note, answersCompressed)
      });
    });
    return {questions: questions, answers: answers};
  }

  presetChords(musicData) {
    let questions = [];
    let answers = [];
    let chords = [];
    for(const type in musicData['chords']) {
      chords.concat(musicData['chords'][type]);
    }
    shuffle(chords).forEach(chord => {
      const name = chord['name'].join(' ');
      answers.push({name: name, notes: chord['notes']});
    });
    const allNotes = musicData['notes']['white'].concat(musicData['notes']['black_sharp']);
    shuffle(allNotes).forEach(chord => {
      const answersCompressed = answers.map(a => a['notes']);
      questions.push({
        name: chord['name'], 
        notes: chord['notes'], 
        allowed_answers: 'all', 
        correct_answers: findIndexes(chord['notes'], answersCompressed)
      });
    });
    return {questions: questions, answers: answers};
  }

  presetScales(musicData) {
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
      const answersCompressed = answers.map(a => a['notes']);
      questions.push({
        name: scale['name'], 
        notes: scale['notes'], 
        allowed_answers: 'all', 
        correct_answers: findIndexes(scale['notes'], answersCompressed)
      });
    });
    return {questions: questions, answers: answers};
  }

  createFromPreset(musicData, presetName = 'all') {
    let result = {questions: [], answers: []};
    switch(presetName) {
      case this.presets[1]: // notes
        result = this.presetNotes(musicData);
        break;
      case this.presets[2]: // chords
        result = this.presetChords(musicData);
        break;
      case this.presets[3]: // scales
        result = this.presetScales(musicData);
        break;
      default: // all
        const resultNotes = this.presetNotes(musicData);
        const resultChords = this.presetChords(musicData);
        const resultScales = this.presetScales(musicData);
        result.questions = shuffle([]
          .concat(resultNotes.questions)
          .concat(resultChords.questions)
          .concat(resultScales.questions));
        result.answers = shuffle([]
          .concat(resultNotes.answers)
          .concat(resultChords.answers)
          .concat(resultScales.answers));
        break;
    }
    this.setQuestions(result.questions);
    this.setAnswers(result.answers);
  }
}

const params = new URLSearchParams(window.location.search);

// Kolla preset och skapa quiz-objekt från musik-data
// Behöver skapas utanför funktionen så att svar och frågor inte blandas om varje gång state uppdateras
let preset = params.get('p');
if(!presets.includes(params.get('p'))) {
  if(preset != "") console.log("Fixed preset, given faulty.");
  preset = "all"; // default
} 
const quiz = new QuizObj(preset);
const quizLen = quiz.questions.length;

export default function Quiz() {

  // Hämta high-score (om det finns)
  const highScore = localStorage.getItem('high_score') || 0;

  // Hantera quiz avslut
  const [running, stop] = useState(true);
  function endQuiz() {
    stop(false);
  };

  // Hantera quiz progression
  const [questionNum, setQuestion] = useState(1);
  function nextQuestion() {
    setQuestion(questionNum+1);
  };

  // Hämta data för korrekta svar
  let correctAnswerIndexes = quiz.questions[questionNum-1]['correct_answers'];
  let correctAnswers = [];
  quiz.answers.forEach((answer, index) => { 
    if(correctAnswerIndexes.includes(index)) correctAnswers.push(answer);
  });
  let correctAnswerNames = correctAnswers.map(answer => answer['name']);

  // Hantera score & high-score
  let [newHigh, setHigh] = useState(false);
  function updateHigh(s) {
    localStorage.setItem('high_score', s);
    setHigh(s);
  }
  let [score, setScore] = useState(0);
  function increaseScore() {
    setScore(score+1);
  };

  // Ytterligare quiz progression
  const chooseAnswer = (event) => {
    const guess = event.target.textContent;
    if(correctAnswerNames.includes(guess)) {
      increaseScore();
    }
    if(questionNum < quizLen) {
      nextQuestion();
    } else {
      if(localStorage.getItem('high_score') < score) updateHigh(score);
      endQuiz();
    }
  }
  
  // Skapa html för questions
  let format;
  format = params.get('q');
  if(!questionFormats.includes(format)) {
    if(format != "") console.log("Fixed question-format, given faulty.");
    format = answerFormats[2]; // default / keys
  }
  let questionsContent = drawQuestions(format);
  
  // Skapa html för answers
  format = params.get('a');
  if(!answerFormats.includes(format)) {
    if(format != "") console.log("Fixed answer-format, given faulty.");
    format = answerFormats[0]; // default / names
  }
  let answersContent = drawAnswers(format);

  // Funktioner för att skapa html för questions och answers
  function drawQuestions(format) {
    switch(format) { // questions
      case questionFormats[0]: // names
        return <>
          
        </>;
      case questionFormats[1]: // sheets
        return <>
        </>;
      default: // keys / questionFormats[2]
        return <>
          <div className="questions main">
            <PianoKeys octaves={[4]} markedKeys={correctAnswerNames}/>
          </div>
        </>;
    }
  }
  function drawAnswers(format) {
    switch(format) { // answers
      case answerFormats[1]: // sheets
        return <>
        </>;
      case answerFormats[2]: // keys
      return <>
        </>;
      default: // names / answerFormats[0]
      return <>
          <div className="answer bottom">
            {quiz.answers.map((answer, index) => {
              return <button className="btn answer" onClick={chooseAnswer} key={index}>{answer['name']}</button>;
            })}
          </div>
        </>;
    }
  }
  return <>
    <div id="quiz-wrap" className={running ? "running" : "finished"}>
      {running ? ( 
        <>
          <div className="top">
            <header>
              <div>Progress: {questionNum}/{quizLen}</div>
              <div>Score: {score}</div>
              <div>High-score: {highScore}</div>
            </header>
            {questionsContent}
          </div>
          {answersContent}
        </>
      ) : (
        <div className="result">
          <h1>~ Result ~</h1>
          {newHigh && <p>New high-score!</p>}
          <h2>Score: {score}/{quizLen}</h2>
        </div>
      )}
    </div>
  </>;
}