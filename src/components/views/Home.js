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
          <a className="btn" href="/quiz">Everything</a>
          <a className="btn" href="/quiz?p=notes">Notes</a>
          <a className="btn" href="/quiz?p=chords">Chords</a>
          <a className="btn" href="/quiz?p=scales">Scales</a>
      </div>
    </div>
  </>;
}