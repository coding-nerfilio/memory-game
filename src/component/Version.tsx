import { ModalFunctions } from "src/hook/useModal";
import AboutModal from "src/modal/AboutModal";

const Version = (props: { ModalFunctions: ModalFunctions }) => {
	return (
		<div
			className="d-flex text-light m-0 mt-auto mb-2 justify-content-end align-items-center me-4"
			onClick={() => props.ModalFunctions.showModal("", <AboutModal />)}
		>
			Memory Game {process.env.REACT_APP_VERSION}
		</div>
	);
};

export default Version;
