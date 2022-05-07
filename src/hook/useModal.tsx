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

const useModal = () => {
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

	return {
		modalData: { ...modalState, onHide },
		showModal,
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

export { useModal, Modal, IShowModal, ModalState };
