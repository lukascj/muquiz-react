import React from 'react';
import "./Home.scss";

export default function Home() {
  return <>
    <div id="home-wrap">
      <div className="top">
        <h1>MU<span style={{ color: 'var(--c2-dark)' }}>Q</span>UIZ</h1>
        <h3>~ Piano ~</h3>
      </div>
      <div className="bottom">
          <button className="btn">Everything</button>
          <button className="btn">Notes</button>
          <button className="btn">Chords</button>
          <button className="btn">Scales</button>
      </div>
    </div>
  </>;
}