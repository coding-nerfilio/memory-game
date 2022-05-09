import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ModalFunctions } from "src/hook/useModal";
import AboutModal from "src/modal/AboutModal";

const StartScreen = (props: { ModalFunctions: ModalFunctions }) => {
	const navigate = useNavigate();

	return (
		<Container className="pt-5">
			<Row className="mt-6 mx-3">
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
