import { TRIGGER, commands, messages, NO_MATCH_MESSAGES } from './grammar.js';


function interpret(os, speech) {
    let message;
    let match = false;

    if (speech.includes(TRIGGER)) {
        for (const command in commands) {
            match = commands[command].some(phrase => speech.includes(phrase));
            if (match) {
                message = messages[os][command];
                return message;
            }
        }

        const index = Math.floor(Math.random() * NO_MATCH_MESSAGES.length);
        message = NO_MATCH_MESSAGES[index];
        return message;        
    }
    
    return '';   
}


export default interpret;
