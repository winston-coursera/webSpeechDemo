const synth = window.speechSynthesis || window.webkitSpeechSynthesis;

export const getVoiceList = () => synth.getVoices();

export const speak = ({speakStuff, voice}) => {
  // quick return condition
  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    return
  }

  debugger;

  if (speakStuff && speakStuff.length) {
    const speech = new SpeechSynthesisUtterance(speakStuff);
    speech.lang = 'en-US';
    speech.text = speakStuff;

    if (voice) speech.voice = voice;

    synth.speak(speech);
  }
}

export default {
  getVoiceList,
  speak,
}