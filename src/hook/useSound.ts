import { useState } from "react";
import AudioFX from "../utils/audio";

type IUseSound = {
	muted: boolean;
	switchMute: () => void;
	Sounds: { playTouchFX: () => void; playBestFX: () => void; playSolvedFX: () => void };
};

const useSound = () => {
	const [muted, setMuted] = useState(false);

	const switchMute = () => {
		if (muted) {
			AudioFX.playTouchFX();
		}
		setMuted(!muted);
	};

	const play = (action: () => void) => {
		if (!muted) {
			action();
		}
	};

	const playTouchFX = () => {
		play(AudioFX.playTouchFX);
	};

	const playBestFX = () => {
		play(AudioFX.playBestFX);
	};

	const playSolvedFX = () => {
		play(AudioFX.playSolvedFX);
	};

	return { muted, switchMute, Sounds: { playTouchFX, playBestFX, playSolvedFX } };
};

export { useSound, IUseSound };
