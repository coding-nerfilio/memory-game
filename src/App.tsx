import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import StartScreen from "./screen/StartScreen";
import DifficultyScreen from "./screen/DifficultyScreen";
import PlayScreen from "./screen/PlayScreen";
import { Modal, useModal } from "./hook/useModal";
import { useSound } from "./hook/useSound";
import { useReducer } from "react";
import { initialState, reducer } from "./reducer";

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState(42));
	const sound = useSound();
	const modal = useModal();

	return (
		<>
			<Modal modalData={modal.modalData} />
			<Header store={{ state, dispatch }} ModalFunctions={modal.Functions} sound={sound} />
			<Routes>
				<Route path="/" element={<StartScreen />} />
				<Route path="/difficulty" element={<DifficultyScreen />} />
				<Route path="/game" element={<PlayScreen store={{ state, dispatch }} sound={sound} />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
};

export default App;
