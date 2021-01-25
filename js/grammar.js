const TRIGGER = 'Zelda'

const commands = {
    'mute': ['mute', 'microphone', 'mic', 'turn off microphone', 'turn off mic', 'microphone off', 'mic off'],
    'unmute': ['unmute', 'turn on microphone', 'microphone on', 'mic on'],
    'video': ['video', 'turn on video', 'turn on camera', 'video on', 'camera on'],
    'novideo': ['turn off video', 'turn off camera', 'video off', 'camera off'],
    'fullscreen': ['full screen', 'maximize', 'zoom in', 'increase zoom', 'zoom out', 'decrease zoom', 'minimize'],
    'speaker': ['speaker'],
    'gallery': ['gallery'],
    'participants': ['participants', 'attendees', 'people', 'members'],
    'invite': ['invite', 'invitation', 'add people', 'add participants', 'add to meeting'],
    'chat': ['chat', 'message', 'messaging', 'chatting', 'chats', 'messages'],
    'raise': ['hand', 'raise hand', 'hand raise', 'hand up'],
    'lower': ['lower hand', 'hand lower', 'hand down'],
    'localrecord': ['local recording', 'local record', 'record local', 'record locally', 'recording local', 'recording locally', 'record on computer', 'record to computer', 'recording on computer', 'recording to computer', 'record to desktop', 'record on desktop', 'recording to desktop', 'recording on desktop'],
    'cloudrecord': ['Cloud recording', 'Cloud record', 'record cloud', 'record on cloud', 'record to cloud', 'record to the cloud', 'record on the cloud', 'recording cloud', 'recording to cloud', 'recording on cloud', 'record online', 'recording online'],  
    'pauserecord': ['pause recording', 'pause record', 'pause cloud', 'pause local', 'record pause', 'recording pause'],
    'resumerecord': ['resume recording', 'resume record', 'resume cloud', 'resume local', 'record resume', 'recording resume'],   
    'record': ['record', 'recording'],
    'startshare': ['start share screen', 'begin share screen', 'start screen share', 'begin screen share', 'start screen sharing', 'begin screen sharing', 'start sharing screen', 'begin sharing screen'],
    'stopshare': ['stop share screen', 'end share screen', 'stop screen share', 'end screen share', 'stop screen sharing', 'end screen sharing', 'stop sharing screen', 'end sharing screen'],
    'pauseshare': ['pause share', 'pause sharing', 'pause screen share', 'pause screen sharing', 'pause sharing screen'],
    'resumeshare': ['resume share', 'resume sharing', 'resume screen share', 'resume screen sharing', 'resume sharing screen'],
    'share': ['screen share', 'share screen', 'screen sharing', 'sharing screen'],
    'floating': ['floating meeting controls', 'meeting controls', 'floating meeting', 'floating controls', 'screen share tab']    
}

const messages = {
    'windows': {
        'mute': 'To <em>mute/unmute</em>, press <strong>Alt + A</strong>. Hold <strong>SPACE</strong> to temporarily unmute.',
        'unmute': 'To <em>mute/unmute</em>, press <strong>Alt + A</strong>. Hold <strong>SPACE</strong> to temporarily unmute.',
        'video': 'To turn <em>video on/off</em>, press <strong>Alt + V</strong>.',
        'novideo': 'To turn <em>video on/off</em>, press <strong>Alt + V</strong>.',
        'fullscreen': 'To <em>enter/exit full screen</em>, press <strong>Alt + F</strong>.',
        'speaker': 'To <em>switch to speaker view</em>, press <strong>Alt + F1</strong>.',
        'gallery': 'To <em>switch to gallery view</em>, press <strong>Alt + F2</strong>.',
        'participants': 'To <em>view meeting participants</em>, press <strong>Alt + U</strong>.',
        'invite': 'To <em>invite participants to meeting</em>, press <strong>Alt + I</strong>.',
        'chat': 'To <em>open the chat</em>, press <strong>Alt + H</strong>.',
        'raise': 'To <em>raise/lower your hand</em>, press <strong>Alt + Y</strong>.',
        'lower': 'To <em>raise/lower your hand</em>, press <strong>Alt + Y</strong>.',
        'localrecord': 'To <em>start/stop local recording</em>, press <strong>Alt + R</strong>.',
        'cloudrecord': 'To <em>start/stop cloud recording</em>, press <strong>Alt + C</strong>.',
        'pauserecord': 'To <em>pause/resume recording</em>, press <strong>Alt + P</strong>.',
        'resumerecord': 'To <em>pause/resume recording</em>, press <strong>Alt + P</strong>.',
        'record': 'You can record locally to your device by pressing <strong>Alt + R</strong>. Or you can record to the cloud by pressing <strong>Alt + C</strong>. To pause the recording, press <strong>Alt + P</strong>.',
        'startshare': 'To <em>start/stop screen sharing</em>, press <strong>Alt + S</strong>.',
        'stopshare': 'To <em>start/stop screen sharing</em>, press <strong>Alt + S</strong>.',
        'pauseshare': 'To <em>pause/resume screen sharing</em>, press <strong>Alt + T</strong>.',
        'resumeshare': 'To <em>pause/resume screen sharing</em>, press <strong>Alt + T</strong>.',
        'share': 'You can <em>start screen sharing</em> by pressing <strong>Alt + S</strong>. To <em>pause the screen sharing</em>, press <strong>Alt + T</strong>.',     
        'floating': 'To <em>show/hide the floating meeting controls</em> during screen sharing, press <strong>Ctrl Alt Shift + H</strong>.'   
    },
    'mac': {
        'mute': 'To <em>mute/unmute</em>, press <strong>Command Shift + A</strong>. Hold <strong>SPACE</strong> to temporarily unmute.',
        'unmute': 'To <em>mute/unmute</em>, press <strong>Command Shift + A</strong>. Hold <strong>SPACE</strong> to temporarily unmute.',
        'video': 'To turn <em>video on/off</em>, press <strong>Command Shift + V</strong>.',
        'novideo': 'To turn <em>video on/off</em>, press <strong>Command Shift + V</strong>.',
        'fullscreen': 'To <em>enter/exit full screen</em>, press <strong>Command Shift + F</strong>.',
        'speaker': 'To <em>switch between speaker and gallery view</em>, press <strong>Command Shift + W</strong>.',
        'gallery': 'To <em>switch between speaker and gallery view</em>, press <strong>Command Shift + W</strong>.',
        'participants': 'To <em>view meeting participants</em>, press <strong>Command + U</strong>.',
        'invite': 'To <em>invite participants to meeting</em>, press <strong>Command + I</strong>.',
        'chat': 'To <em>open the chat</em>, press <strong>Command Shift + H</strong>.',
        'raise': 'To <em>raise/lower your hand</em>, press <strong>Option + Y</strong>.',
        'lower': 'To <em>raise/lower your hand</em>, press <strong>Option + Y</strong>.',
        'localrecord': 'To <em>start/stop local recording</em>, press <strong>Command Shift + R</strong>.',
        'cloudrecord': 'To <em>start/stop cloud recording</em>, press <strong>Command Shift + C</strong>.',
        'pauserecord': 'To <em>pause/resume recording</em>, press <strong>Command Shift + P</strong>.',
        'resumerecord': 'To <em>pause/resume recording</em>, press <strong>Command Shift + P</strong>.',
        'record': 'You can record locally to your device by pressing <strong>Command Shift + R</strong>. Or you can record to the cloud by pressing <strong>Command Shift + C</strong>. To pause the recording, press <strong>Command Shift + P</strong>.',
        'startshare': 'To <em>start/stop screen sharing</em>, press <strong>Command Shift + S</strong>.',
        'stopshare': 'To <em>start/stop screen sharing</em>, press <strong>Command Shift + S</strong>.',
        'pauseshare': 'To <em>pause/resume screen sharing</em>, press <strong>Command Shift + T</strong>.',
        'resumeshare': 'To <em>pause/resume screen sharing</em>, press <strong>Command Shift + T</strong>.',
        'share': 'You can <em>start screen sharing</em> by pressing <strong>Command Shift + S</strong>. To <em>pause the screen sharing</em>, press <strong>Command Shift + T</strong>.',     
        'floating': 'To <em>show/hide the floating meeting controls</em> during screen sharing, press <strong>Ctrl Option Command + H</strong>.'
    }       
}

const NO_MATCH_MESSAGES = [
    `I didn't quite catch that.`,
    `Can you say that again?`,
    `I can't do that for you in Zoom.`,
    `I'm not sure that's possible in Zoom.`,
    `Sadly, I cannot do as you wish.`,
    `I'm not sure I understand what you want.`,
    `I'm afraid that is beyond my humble abilities.`,
    `I can't imagine trying to do that in Zoom.`,
    `I'm uncertain if I'm hearing you properly.`,
    `I beg your pardon.`,
    `Forgive me but I must have misheard.`,
    `I'm not a genie in a bottle. Please try something else.`,
    `It seems I must have dozed off. What was that?`,
    `Hmm... sounds too difficult to even try.`,
    `Surely, you are referring to something else.`
]


export { 
    TRIGGER,
    commands,
    messages,
    NO_MATCH_MESSAGES
}