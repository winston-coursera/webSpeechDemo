const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export default () => {
  let recognition;
  
  const initSpeechRecognition = ({ resultCallback, endSpeechCallback, endListeningCallback, errorCallback }) => {
    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const { results } = event;
      /*
        The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
        The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
        It has a getter so it can be accessed like an array
        The first [0] returns the SpeechRecognitionResult at position 0.
        Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
        These also have getters so they can be accessed like arrays.
        The second [0] returns the SpeechRecognitionAlternative at position 0.
        We then return the transcript property of the SpeechRecognitionAlternative object 
      */
      const { transcript, confidence } = results[0][0];

      console.log(`Confidence: ${confidence}`);
      resultCallback(transcript);
    }

    recognition.onspeechend = () => {
      endSpeechCallback();
    };

    recognition.onerror = (event) => {
      errorCallback(event);
    }
    
    // Fired when the speech recognition service has disconnected.
    recognition.onend = () => endListeningCallback();
    
    /* 
      Other events worth registering:
        - recognition.onaudiostart:Fired when the user agent has started to capture audio.
        - recognition.onaudioend: Fired when the user agent has finished capturing audio.
        - recognition.onnomatch: Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
        - recognition.onsoundstart: Fired when any sound — recognisable speech or not — has been detected.
        - recognition.onsoundend: Fired when any sound — recognisable speech or not — has stopped being detected.
        - recognition.onspeechstart: Fired when sound that is recognised by the speech recognition service as speech has been detected.
        - recognition.onstartFired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
    */

    return recognition;
  }

  const startSpeechRecognition = () => recognition.start();

  const endSpeechRecognition = () => recognition.stop();

  return {
    initSpeechRecognition,
    startSpeechRecognition,
    endSpeechRecognition,
  }
}

