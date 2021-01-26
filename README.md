# Zelda

![Header](/demo/header.jpg)

A simple web interface that allows users to ask for Zoom meeting shortcuts. 

## Description

This is a side project derived from https://github.com/xunchuan-liu/HeyZoom. 

Due to Zoom's limited API and SDK provisions, our original project used a workaround to programmatically press keyboard shortcuts for controlling Zoom meeting functionality. 

However, this capability is disabled on the web for security, so as an alternative, my web version gives the shortcuts a user needs to press in a Zoom meeting.

### Experimental Technologies
This project makes use of 2 experimental technologies offered by Google's [**Web Speech API**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API): **Speech Recognition** and **Speech Synthesis**. 

Due to the experimental nature, browser support is limited. If viewing this project, use **Google Chrome for Desktop or Android**. 

> **Note**: The Speech Synthesis component can be a little buggy at times. Sometimes there is no speaking even when the voice assistant is enabled. 

&nbsp;

## Demo

### Watch the demo video from our original project.

https://youtu.be/6g9BPz0VuhE

### Live Demo Link
https://xunchuan-liu.github.io/Zelda/

&nbsp;

Choose your **Operating System (OS)** and enable/disable the **voice assistant**. Choose a **voice** for your assistant if enabled.

![1st Demo Image](/demo/demo1.jpg)

After clicking the microphone, begin speaking to Zelda! If a recognized command is heard, Zelda will tell you a handy shortcut for Zoom.

![2nd Demo Image](/demo/demo2.jpg)






