import { Col, Row } from "react-bootstrap";

const Score = (props: { turn: number; best: number }) => {
	return (
		<Row className="text-center  ">
			<Col xs={12} className="turn">
				TURN: {props.turn}
			</Col>
			<Col xs={12} className="best">
				BEST: {props.best}
			</Col>
		</Row>
	);
};

export default Score;
