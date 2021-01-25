import interpret from './interpreter.js';
import speak from './speechSynthesis.js';
import messages from './messages.js';

// Check if speech recognition is supported by browser
if (!('webkitSpeechRecognition' in window)) {
    document.querySelector('#tip').innerHTML = messages['upgrade'];
    document.querySelector('#record').disabled = true;
}

const SpeechRecognition = webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const results = document.querySelector('.results');
const record = document.querySelector('#record');
const recordAnimation = document.querySelector('.active-animation');
const windowsOption = document.querySelector('#windows');
const macOption = document.querySelector('#mac');
const voiceOption = document.querySelector('#voice');
const voiceConfiguration = document.querySelector('.voice-options')
const voiceSelect = document.querySelector('select');

const tipText = document.querySelector('#tip');

let os = document.querySelector('input[name=os]:checked').value;
let voiceActivated = document.querySelector('#voice').checked;
let selectedVoice;

windowsOption.addEventListener('click', function () {    
    os = this.value;    
})

macOption.addEventListener('click', function() {    
    os = this.value;    
})

voiceOption.addEventListener('click', function() {
    voiceActivated = this.checked;
    if (voiceActivated) {
        voiceConfiguration.style.visibility = 'visible';
    }    else {
        voiceConfiguration.style.visibility = 'hidden';
    }
})

voiceSelect.addEventListener('change', function() {
    selectedVoice = this.value;    
})

let running; // flag for whether the recognition is activated
let ignoreEnd; // flag for sending error message instead of default recognition ended message

record.onclick = () => {   
    if (!running) {
        recordAnimation.style.opacity = 1;        
        recognition.start();
        running = true;
        ignoreEnd = false;        
        tipText.innerHTML = "Speak now. Just say <em>Zelda...</em>  like <em>Zelda mute</em> or <em>Zelda video on</em>.";               
    }
    else {        
        recordAnimation.style.opacity = 0;
        recognition.stop();
        running = false;
        ignoreEnd = true;
        results.innerHTML = '';
        tipText.innerHTML = "Click the microphone to begin speaking.";
    }    
}

recognition.onresult = function(event) {    
    const index = event.resultIndex; // get the most recent speech that was recognized
    const speech = event.results[index][0].transcript;     
    const response = interpret(os, speech);  
    results.innerHTML = '';
    results.insertAdjacentHTML('afterbegin', response);    
    if (voiceActivated && selectedVoice) speak(response, selectedVoice, 1, 1);
}

recognition.onerror = function(event) {     
    if (event.error === 'no-speech') {        
        tipText.innerHTML = messages['noSpeech'];        
      }
    else if (event.error === 'audio-capture') {
        tipText.innerHTML = messages['noMicrophone'];                      
    }    
    else if (event.error === 'not-allowed') {
        tipText.innerHTML = messages['blocked'];        
    }
    else if (event.error === 'language-not-supported') {
        tipText.innerHTML = messages['upgrade'];        
    }
    else {
        tipText.innerHTML = 'Zelda encountered an unknown error.';
    }

    ignoreEnd = true;
    recordAnimation.style.opacity = 0;
    results.innerHTML = '';        
}

recognition.onend = function() {    
    running = false;
    if (ignoreEnd) return;

    tipText.innerHTML = 'Zelda has stopped listening. Click the microphone to resume.'
    recordAnimation.style.opacity = 0;
    results.innerHTML = '';    
}




