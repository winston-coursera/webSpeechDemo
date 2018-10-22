import React, { Component } from 'react';
import SpeechSynthesis from './components/SpeechSynthesis';
import SpeechRecognition from './components/SpeechRecognition';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <Link to="/recognition">Speech Recognition</Link>
            <Link to="/synthesis">Speech Synthesis</Link>
          </nav>
          <main>
            <Switch>
              <Route exact path="/" component={SpeechRecognition} />
              <Route path="/recognition" component={SpeechRecognition} />
              <Route path="/synthesis" component={SpeechSynthesis} />
            </Switch>
          </main>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
