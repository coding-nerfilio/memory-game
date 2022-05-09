import { useState, useEffect } from "react";

const useBest = (size: number) => {
	const [best, setBest] = useState(0);
	const itemName = `best${size}`;
	const handleChangeBest = (newValue) => {
		if (newValue < best || best === 0) {
			localStorage.setItem(itemName, String(newValue));
			setBest(newValue);
			return true;
		}
		return false;
	};

	useEffect(() => {
		const b = localStorage.getItem(itemName);
		if (b === null) {
			setBest(0);
		} else {
			setBest(Number(b));
		}
	}, []);

	return { value: best, handleChangeBest };
};

export default useBest;
