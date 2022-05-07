import { Col, Row } from "react-bootstrap";
import { IShowModal } from "src/hook/useModal";
import AboutModal from "./AboutModal";

const Header = (props: { showModal: IShowModal }) => {
	return (
		<Row>
			<Col className=" text-center pt-2 text-light" xs={12}>
				<div className="header" onClick={() => props.showModal("", <AboutModal />)}>
					<img src={require("../assets/logo512.png")} style={{ width: 64, height: 64 }} />
				</div>
			</Col>
		</Row>
	);
};

export default Header;
