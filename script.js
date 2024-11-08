window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);//selecting the key that was pressed
if(!audio) return; //stop the function from running all together
audio.currentTime = 0; //rewind to the start
audio.play();//play the audio
key.classList.add('playing');//add the playing class to the key
});