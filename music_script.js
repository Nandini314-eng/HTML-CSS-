const playButton = document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');
const audioPlayer = document.getElementById('audio-player');

// Play the audio when the play button is clicked
playButton.addEventListener('click', () => {
  audioPlayer.play();
  playButton.style.display = 'none'; // Hide play button
  pauseButton.style.display = 'inline-block'; // Show pause button
});

// Pause the audio when the pause button is clicked
pauseButton.addEventListener('click', () => {
  audioPlayer.pause();
  pauseButton.style.display = 'none'; // Hide pause button
  playButton.style.display = 'inline-block'; // Show play button
});
