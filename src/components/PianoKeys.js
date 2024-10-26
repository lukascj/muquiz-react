import React from 'react';
import "./PianoKeys.scss"
import { data as musicData }  from '../data';

export default function PianoKeys({ octaves, markedKeys, hoverable }) {
  const notes = musicData['notes'];
  return <>
    <div id="piano-wrap" className={hoverable ? "hoverable" : ""}>
      {octaves.map((octave, index) => {
        return <div className="octave" octave={octave.toString()} key={index}>
          <div className="white-keys">
          {notes["white"].map((note, index) => {
            return <div className={`key ${note["name"][0]}`} marked={markedKeys.includes(note["name"][0]) ? "true" : "false"} key={index}></div>
          })}
          </div>
          <div className="black-keys">
          {notes["black"].map((note, index) => {
            return <div className={`key ${note["name"][0]} ${note["name"][1]}`} marked={markedKeys.includes(note["name"][0]) ? "true" : "false"} key={index}></div>
          })}
          </div>
        </div>
      })}
    </div>
  </>;
}