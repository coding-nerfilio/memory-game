import { Navigate, Route, Routes } from "react-router-dom";
import { Modal, useModal } from "./hook/useModal";
import { useSound } from "./hook/useSound";
import { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { Container } from "react-bootstrap";
import Header from "./component/Header";
import StartScreen from "./screen/StartScreen";
import DifficultyScreen from "./screen/DifficultyScreen";
import PlayScreen from "./screen/PlayScreen";
import Version from "./component/Version";

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState(42));
	const sound = useSound();
	const modal = useModal();

	return (
		<Container fluid className="d-flex flex-column p-0 h-100 w-100 min-vh-100">
			<Modal modalData={modal.modalData} />
			<Header store={{ state, dispatch }} ModalFunctions={modal.Functions} sound={sound} />
			<Routes>
				<Route path="/" element={<StartScreen ModalFunctions={modal.Functions} />} />
				<Route path="/difficulty" element={<DifficultyScreen />} />
				<Route path="/game" element={<PlayScreen store={{ state, dispatch }} sound={sound} />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			<Version ModalFunctions={modal.Functions} />
		</Container>
	);
};

export default App;
