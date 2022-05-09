import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ModalFunctions } from "src/hook/useModal";
import AboutModal from "src/modal/AboutModal";

const StartScreen = (props: { ModalFunctions: ModalFunctions }) => {
	const navigate = useNavigate();

	return (
		<Container className="mt-5">
			<Row className="mx-3">
				<h1 className="text-center text-white">MAIN MENU</h1>
			</Row>
			<Row className="mt-5 mx-3">
				<div className="button text-white p-2" onClick={() => navigate("/difficulty")}>
					<h3>START</h3>
				</div>
			</Row>
			<Row className="mt-2 mx-3">
				<div className="button text-white p-2" onClick={() => props.ModalFunctions.showModal("", <AboutModal />)}>
					<h3>ABOUT</h3>
				</div>
			</Row>
		</Container>
	);
};

export default StartScreen;
