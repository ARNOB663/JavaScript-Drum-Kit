# JavaScript-Drum-Kit

# JavaScript Soundboard 🎹

This is a simple soundboard project built with vanilla JavaScript. The project plays specific sounds when certain keys on the keyboard are pressed and adds a transition effect to the keys for visual feedback.

## Features
- Plays unique sounds when keys are pressed.
- Highlights the key while the sound is playing.
- Resets the key styling after the sound ends.
- Uses JavaScript to dynamically handle key press events and add/remove CSS classes.

## How It Works
1. Each key is associated with an audio element, identified by a `data-key` attribute that matches the `keyCode` of the keyboard key.
2. When a key is pressed, the `playSound` function finds the corresponding audio element and plays it.
3. A CSS transition effect highlights the key while the sound is playing.
4. Once the sound and transition are complete, the visual effect is removed by the `removeTransition` function.

## Code Breakdown

### JavaScript Code

```javascript
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0; // Reset audio to start
    audio.play();
    key.classList.add('playing'); // Add playing class for effect
}

function removeTransition(e){
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
