import { useState } from "react";
import { Button, Modal as M } from "react-bootstrap";

type ModalState = {
	show: boolean;
	title: JSX.Element | string;
	body: JSX.Element | string;
	onHideDo?: () => void;
};

interface IShowModal {
	(title: JSX.Element | string, body: JSX.Element | string, onHideDo?: () => void): void;
}

interface IHideModal {
	(): void;
}

type ModalFunctions = {
	showModal: IShowModal;
	hideModal: IHideModal;
};

const useModal = (): { modalData: ModalState & { onHide: () => void }; Functions: ModalFunctions } => {
	const [modalState, setModalState] = useState<ModalState>({
		show: false,
		title: "",
		body: "",
		onHideDo: undefined,
	});

	const showModal: IShowModal = (title, body, onHide) => {
		setModalState({
			show: true,
			title: title,
			body: body,
			onHideDo: onHide,
		});
	};

	const onHide = () => {
		setModalState({ ...modalState, show: false });
		modalState.onHideDo !== undefined && modalState.onHideDo();
	};

	const hideModal: IHideModal = () => {
		setModalState({ ...modalState, show: false });
	};

	return {
		modalData: { ...modalState, onHide },
		Functions: { showModal, hideModal },
	};
};

const Modal = ({ modalData }: { modalData: ModalState & { onHide: () => void } }) => {
	return (
		<M show={modalData.show} onHide={modalData.onHide} centered>
			<M.Header closeButton>
				<M.Title>{modalData.title}</M.Title>
			</M.Header>
			<M.Body className="text-center">{modalData.body}</M.Body>
		</M>
	);
};

export { useModal, Modal, ModalState, ModalFunctions };
