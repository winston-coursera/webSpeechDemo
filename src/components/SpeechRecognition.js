import React, { Component } from 'react';
import TextOutput from './TextOutput';

import speechRecognition from '../utils/speechRecognition';

class SpeechRecognition extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      listening: false,
      count: 0,
    }
  }

  componentWillMount() {
    const { 
      initSpeechRecognition, 
      startSpeechRecognition, 
      endSpeechRecognition 
    } = speechRecognition();

    this.endSpeech = endSpeechRecognition;
    this.startSpeech = startSpeechRecognition;

    initSpeechRecognition({
      startCallback: this.startListening,
      resultCallback: this.updateText,
      endSpeechCallback: () => {this.setState({ count: this.state.count + 1 })},
      endListeningCallback: this.endHandler,
      errorCallback:this.errorHandler,
    });
  }

  componentWillUnmount() {
    this.endListening();
  }

  startListening = () => {
    this.startSpeech();
    this.setState({ listening: true });
  }

  updateText = text => this.setState({ text });

  endListening = () => {
    this.endSpeech();
  };

  endHandler = () => this.setState({ listening: false });

  errorHandler = () => {
    this.updateText('error!');
    this.endListening();
  }

  onClick = () => {
    this.startListening();
  }

  render() {
    const { text, count, listening } = this.state;

    return (
      <section>
        <TextOutput attempt={count} text={text || 'Hey guise look at this demo project'} />
        <button onClick={!listening ? this.onClick : this.endListening}>
          {
            !listening ?
            'Start' :
            'End'
          }
        </button>
      </section>
    )
  }
}

export default SpeechRecognition;