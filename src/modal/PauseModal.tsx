import { useNavigate } from "react-router-dom";
import { ModalFunctions } from "src/hook/useModal";
import { Store } from "src/types";

const PauseModal = (props: { store: Store; ModalFunctions: ModalFunctions }) => {
	const navigate = useNavigate();
	return (
		<>
			<h1 className="mb-5">PAUSE</h1>
			<div
				className="button p-2 mb-2 text-white"
				onClick={() => {
					props.store.dispatch({ type: "initial_state", payload: props.store.state.blocks.length });
					props.ModalFunctions.hideModal();
				}}
			>
				RESET
			</div>
			<div
				className="button p-2 mb-2 text-white"
				onClick={() => {
					navigate(-2);
					props.ModalFunctions.hideModal();
				}}
			>
				MAIN MENU
			</div>
		</>
	);
};

export default PauseModal;
