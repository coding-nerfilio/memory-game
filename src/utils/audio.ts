const soundFX = new Audio(require("../assets/sound.mp3"));
const bestFX = new Audio(require("../assets/best.wav"));
const solvedFX = new Audio(require("../assets/solved.wav"));
soundFX.playbackRate = 5;

const playTouchFX = () => {
	soundFX.pause();
	soundFX.currentTime = 0;
	soundFX.play();
};

const playBestFX = () => {
	bestFX.play();
};

const playSolvedFX = () => {
	solvedFX.play();
};

const AudioFX = {
	playTouchFX,
	playBestFX,
	playSolvedFX,
};

export default AudioFX;
