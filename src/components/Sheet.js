import React from 'react';
import "./Sheet.scss";
import { data as musicData }  from '../data';

export default function Sheet({ notes, clef }) {
  // 'notes' struktur: [[{name: "C", octave: 4, length: "1/4"}, {name: "C#", octave: 4, length: "1/4"}][{name: "F", octave: 4, length: "1/4"}]]
  // Varje array inuti den yttersta representerar en "bar"

  function addLines(noteVal) {
    let dir, lineCount;
    if(noteVal > 4) {
      dir = 'above';
      lineCount = Math.floor(noteVal-4);
    } else if(noteVal < 0) {
      dir = 'below';
      lineCount = Math.floor(noteVal*(-1));
    } else {
      return;
    }
    return <>
      <ul className={`add-lines ${dir}`}>
        {Array.from({length: lineCount}).map((_, index) => {
          <li key={index}></li>
        })}
      </ul>
    </>;
  }

  return <>
    <div id="sheet-wrap" clef={clef['name']}>
      <div id="clef">{clef['symbol']}</div>
      <ul id="lines">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      {notes.map((note, index) => {
        noteVal = musicData['notes']['values'][clef['name']][`o${note['octave']}`];
        acc = (note['name'].includes('#') ? '#' : false) || (note['name'].includes('♭') ? '♭' : false);
        return <>
          <div className={`note ${note['name']} o${octave}}`} val={noteVal} key={index}>
            <span className="symbol"></span>
            {acc && <span className="acc">{acc}</span>}
          </div>
          {addLines(noteVal)}
        </>
      })}
    </div>
  </>;
}