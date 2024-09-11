// "comp" for component
import React, { Component } from 'react';
import "./comp.PianoKeys.scss"

export default class PianoKeys extends Component {
  render() {
    return <div id="wrap" class="hoverable">
      <div id="white-keys">
        <div class="key white c c4"></div>    
        <div class="key white d c4"></div>
        <div class="key white e c4"></div>
        <div class="key white f c4"></div>
        <div class="key white g c4"></div>
        <div class="key white a c4"></div>
        <div class="key white b c4"></div>
      </div>
      <div id="black-keys">
        <div class="key black cs c4"></div>
        <div class="key black ds c4"></div>
        <div class="key black fs c4"></div>
        <div class="key black gs c4"></div>
        <div class="key black as c4"></div>
      </div>
    </div>;
  }
}