import { useState, useEffect } from "react";

const useBest = () => {
	const [best, setBest] = useState(0);

	const handleChangeBest = (newValue) => {
		if (newValue < best || best === 0) {
			localStorage.setItem("best", String(newValue));
			setBest(newValue);
			return true;
		}
		return false;
	};

	useEffect(() => {
		const b = localStorage.getItem("best");
		if (b === null) {
			setBest(0);
		} else {
			setBest(Number(b));
		}
	}, []);

	return { value: best, handleChangeBest };
};

export default useBest;
