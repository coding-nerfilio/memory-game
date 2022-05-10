import { Navbar } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { ModalFunctions } from "src/hook/useModal";
import { IUseSound } from "src/hook/useSound";
import { Store } from "src/types";

import PauseModal from "../modal/PauseModal";

const Header = (props: { store: Store; ModalFunctions: ModalFunctions; sound: IUseSound }) => {
	const pathname = useLocation().pathname;

	return (
		<Navbar className={`text-center text-light d-flex justify-content-between align-items-center mt-3`}>
			{pathname === "/game" || pathname === "/" ? <MuteButton sound={props.sound} /> : <BackButton />}
			<GameLogo />
			{pathname === "/game" ? <PauseButton {...props} /> : <EmptyBlock className="me-4" />}
		</Navbar>
	);
};

const EmptyBlock = (props: { className: string }) => {
	return <div className={`button header invisible ${props.className}`}></div>;
};

const GameLogo = () => {
	return (
		<div>
			<img src={require("../assets/logo512.png")} style={{ width: 64, height: 64 }} />
		</div>
	);
};

const BackButton = () => {
	const navigate = useNavigate();
	return (
		<div className="button header ms-4 mb-3" onClick={() => navigate(-1)}>
			<i className="bi-arrow-left" />
		</div>
	);
};

const PauseButton = (props: { store: Store; ModalFunctions: ModalFunctions }) => {
	return (
		<div
			className="button header me-4 mb-3"
			onClick={() =>
				props.ModalFunctions.showModal("", <PauseModal store={props.store} ModalFunctions={props.ModalFunctions} />)
			}
		>
			<i className="bi-pause" />
		</div>
	);
};

const MuteButton = (props: { sound: IUseSound }) => {
	return (
		<div className="button header ms-4 mb-3" onClick={() => props.sound.switchMute()}>
			<i className={props.sound.muted ? "bi-volume-mute" : "bi-volume-up"} />
		</div>
	);
};

export default Header;
