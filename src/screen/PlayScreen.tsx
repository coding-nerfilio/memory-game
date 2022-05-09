import { useEffect, useReducer } from "react";
import Container from "react-bootstrap/Container";
import "../assets/style.css";
import useBest from "../hook/useBest";
import { Modal, useModal } from "../hook/useModal";
import { initialState, reducer } from "../reducer";
import { Store, onBlockClick } from "../types";
import Header from "../component/Header";
import Score from "../component/Score";
import BlockContainer from "../component/BlockContainer";
import WinModal from "../modal/WinModal";
import { IUseSound } from "src/hook/useSound";

const PlayScreen = ({ store, sound }: { store: Store; sound: IUseSound }) => {
	const size = 42;
	const best = useBest();
	const modal = useModal();

	const onBlockClick: onBlockClick = (id, blockIndex) => {
		if (store.state.blockedGame) {
			return;
		}
		sound.Sounds.playTouchFX();
		if (
			store.state.selectedBlock === undefined &&
			(store.state.blocks[blockIndex].type === "idle" || store.state.blocks[blockIndex].type === "hovered")
		) {
			store.dispatch({ type: "selected_block", payload: blockIndex });
			store.dispatch({ type: "set_block_type_selected", payload: blockIndex });
		}
		if (
			store.state.selectedBlock !== undefined &&
			store.state.selectedBlock !== blockIndex &&
			(store.state.blocks[blockIndex].type === "idle" || store.state.blocks[blockIndex].type === "hovered")
		) {
			store.dispatch({ type: "blocked_game", payload: true });
			store.dispatch({ type: "set_block_type_selected", payload: blockIndex });
			setTimeout(() => {
				if (store.state.blocks[store.state.selectedBlock!].id === id) {
					if (store.state.amountOfSolvedBlocks < size - 2) {
						sound.Sounds.playSolvedFX();
					}
					store.dispatch({ type: "set_block_type_solved", payload: store.state.selectedBlock });
					store.dispatch({ type: "set_block_type_solved", payload: blockIndex });
					store.dispatch({ type: "add_solved_blocks" });
				} else {
					store.dispatch({ type: "set_block_type_idle", payload: store.state.selectedBlock });
					store.dispatch({ type: "set_block_type_idle", payload: blockIndex });
				}

				store.dispatch({ type: "add_turn" });
				store.dispatch({ type: "blocked_game", payload: false });
			}, 1000);

			store.dispatch({ type: "selected_block", payload: undefined });
		}
	};

	useEffect(() => {
		if (store.state.amountOfSolvedBlocks === size) {
			sound.Sounds.playBestFX();
			modal.Functions.showModal(
				"",
				<WinModal turn={store.state.turn} handleChangeBest={best.handleChangeBest} />,
				() => {
					store.dispatch({ type: "initial_state", payload: size });
				}
			);
		}
	}, [store.state.amountOfSolvedBlocks]);
	return (
		<>
			<Modal modalData={modal.modalData} />
			<Container fluid className="d-flex flex-column">
				<Score turn={store.state.turn} best={best.value} />
				<BlockContainer blocks={store.state.blocks} onBlockClick={onBlockClick} />
			</Container>
		</>
	);
};

export default PlayScreen;
