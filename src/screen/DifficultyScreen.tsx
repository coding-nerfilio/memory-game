import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DificultyScreen = () => {
	const navigate = useNavigate();
	return (
		<Container className="mt-5">
			<Row className="mx-3">
				<h1 className="text-center text-white">SELECT DIFFICULTY</h1>
			</Row>

			<Row className="mt-5 mx-3">
				<div className="button text-white p-2" onClick={() => navigate("/game", { state: { size: 18 } })}>
					<h3>EASY</h3>
				</div>
			</Row>
			<Row className="mt-2 mx-3">
				<div className="button text-white p-2" onClick={() => navigate("/game", { state: { size: 24 } })}>
					<h3>MEDIUM</h3>
				</div>
			</Row>
			<Row className="mt-2 mx-3">
				<div className="button text-white p-2" onClick={() => navigate("/game", { state: { size: 36 } })}>
					<h3>HARD</h3>
				</div>
			</Row>
			<Row className="mt-2 mx-3">
				<div className="button text-white p-2" onClick={() => navigate("/game", { state: { size: 42 } })}>
					<h3>EXPERT</h3>
				</div>
			</Row>
		</Container>
	);
};

export default DificultyScreen;
