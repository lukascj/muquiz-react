import React from 'react';
import "./PianoKeys.scss"
// import data from "../data/data"; // Fungerar inte av någon anledning...
const data = {
  "notes": {
    "white": [
        { "name": ["C"] },
        { "name": ["D"] },
        { "name": ["E"] },
        { "name": ["F"] },
        { "name": ["G"] },
        { "name": ["A"] },
        { "name": ["B"] }
    ],
    "black": [
        { "name": ["C#", "D♭"] },
        { "name": ["D#", "E♭"] },
        { "name": ["F#", "G♭"] },
        { "name": ["G#", "A♭"] },
        { "name": ["A#", "B♭"] }
    ]
  },
};

export default function PianoKeys({ octaves, markedKeys, hoverable }) {
  console.log(octaves)
  return <>
    <div id="piano-wrap" className={hoverable ? "hoverable" : ""}>
      {octaves.map((octave, index) => {
        return <div className="octave" octave={octave.toString()} key={index}>
          <div className="white-keys">
          {data["notes"]["white"].map((note, index) => {
            return <div className={`key ${note["name"][0]}`} marked={markedKeys.includes(note["name"][0]) ? "true" : "false"} key={index}></div>
          })}
          </div>
          <div className="black-keys">
          {data["notes"]["black"].map((note, index) => {
            return <div className={`key ${note["name"][0]} ${note["name"][1]}`} marked={markedKeys.includes(note["name"][0]) ? "true" : "false"} key={index}></div>
          })}
          </div>
        </div>
      })}
    </div>
  </>;
}