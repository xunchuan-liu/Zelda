const synth = window.speechSynthesis;
let voices = [];

const populateVoices = () => {
    const voiceSelect = document.querySelector('select')
    voices = synth.getVoices();    
    
    const initial = document.createElement('option');
    initial.textContent = 'Select a voice';
    voiceSelect.appendChild(initial);

    voices.forEach((voice, i) => {
        const option = document.createElement('option');
        option.textContent = voice.name;
        option.setAttribute('value', voice.name);        

        voiceSelect.appendChild(option);        
    })    
}

const interpretPunctuation = response => response.replaceAll(/<\/?\w+>/g, '').replaceAll('/', ' or ').replaceAll('+', 'and');

speechSynthesis.onvoiceschanged = populateVoices;

function speak(response, selectedVoice, pitch, rate) {  
    const voice = voices.filter(v => v.name === selectedVoice)[0];    
    response = interpretPunctuation(response);         
    const utterThis = new SpeechSynthesisUtterance(response);    
    utterThis.voice = voice;
    utterThis.pitch = pitch;
    utterThis.rate = rate;   
    
    synth.speak(utterThis);   
}


export default speak;
