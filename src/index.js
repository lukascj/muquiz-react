import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './global.scss';
import Home from './components/views/Home';
import Quiz from './components/views/Quiz';

const App = () => {
  return <>
    <main id="window">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
        </Routes>
      </Router>
    </main>
    <div id="blocked">
      <h1>The window is too small.</h1>
    </div>
  </>;
}

const wrap = ReactDOM.createRoot(document.getElementById('wrap'));
wrap.render(<App />);
// ReactDOM.render(<App />, document.getElementById('wrap'));