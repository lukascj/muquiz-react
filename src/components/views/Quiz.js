import React from 'react';
import "./Quiz.scss";
import PianoKeys from '../PianoKeys';

export default function Quiz() {
  return <>
    <div id="quiz-wrap">
      <div className="top">
        <PianoKeys octaves={[4]} markedKeys={["E","G","C#"]}/>
      </div>
      <div className="bottom">
        <button className="btn" style={{ gridColumn: 'span 2' }}>A</button>
        <button className="btn">B</button>
        <button className="btn">C</button>
        <button className="btn">D</button>
        <button className="btn">E</button>
        <button className="btn">F</button>
        <button className="btn">G</button>
      </div>
    </div>
  </>;
}