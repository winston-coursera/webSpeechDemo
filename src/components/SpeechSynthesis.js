import React, { Component } from 'react';
import TextBox from './TextBox';
import VoiceDropdown from './VoiceDropdown';

import speechSynthesis from '../utils/speechSynthesis';

class SpeechSynthesis extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      voice: false,
    }
  }

  componentWillMount() {
    this.voices = speechSynthesis.getVoiceList();
  }

  onClick = () => {
    const { text, voice } = this.state;
    const speakData = {
      speakStuff: text,
      voice: this.voices[voice]
    }

    speechSynthesis.speak(speakData);
  }

  updateTextbox = (event) => this.setState({ text: event.target.value });
  updateVoice = event => this.setState({ voice: event.target.value })

  render() {
    const { voices, state } = this;
    const { text } = state;

    return (
      <section>
        <TextBox onchangeCallback={this.updateTextbox} text={text} />
        {
          voices &&
          voices.length &&
          <VoiceDropdown voices={voices} onSelect={this.updateVoice} />
        }
        <button onClick={this.onClick}>
          Say it!
        </button>
      </section>
    );
  }
}

export default SpeechSynthesis;