// window.addEventListener('keydown', function(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);//selecting the key that was pressed
// if(!audio) return; //stop the function from running all together
// audio.currentTime = 0; //rewind to the start
// audio.play();//play the audio
// key.classList.add('playing');//add the playing class to the key
// });

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);//selecting the key that was pressed
if(!audio) return; //stop the function from running all together
audio.currentTime = 0; //rewind to the start
audio.play();//play the audio
key.classList.add('playing');//add the playing class to the key

}

function removeTransition(e){
  if(e.propertyName !== 'transform') return;//skip it if it's not a transform
 this.classList.remove('playing');//remove the playing class from the key
}

//remove the transition effect after the key is pressed 
const keys = document.querySelectorAll('.key');//select all the keys
keys.forEach(keys => keys.addEventListener('transitionend', removeTransition));//add event listener to each key

window.addEventListener('keydown', playSound);



