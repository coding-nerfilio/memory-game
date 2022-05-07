import { useEffect, useReducer } from "react";
import Container from "react-bootstrap/Container";
import "./assets/style.css";
import AudioFX from "./utils/audio";
import useBest from "./hook/useBest";
import { Modal, useModal } from "./hook/useModal";
import { initialState, reducer } from "./reducer";
import { onBlockClick } from "./types";
import Header from "./component/Header";
import Score from "./component/Score";
import BlockContainer from "./component/BlockContainer";
import WinModal from "./component/WinModal";

const App = () => {
	const size = 42;
	const [state, dispatch] = useReducer(reducer, initialState(size));
	const best = useBest();
	const modal = useModal();

	const onBlockClick: onBlockClick = (id, blockIndex) => {
		if (state.blockedGame) {
			return;
		}
		AudioFX.playTouchFX();
		if (
			state.selectedBlock === undefined &&
			(state.blocks[blockIndex].type === "idle" || state.blocks[blockIndex].type === "hovered")
		) {
			dispatch({ type: "selected_block", payload: blockIndex });
			dispatch({ type: "set_block_type_selected", payload: blockIndex });
		}
		if (
			state.selectedBlock !== undefined &&
			state.selectedBlock !== blockIndex &&
			(state.blocks[blockIndex].type === "idle" || state.blocks[blockIndex].type === "hovered")
		) {
			dispatch({ type: "blocked_game", payload: true });
			dispatch({ type: "set_block_type_selected", payload: blockIndex });
			setTimeout(() => {
				if (state.blocks[state.selectedBlock!].id === id) {
					if (state.amountOfSolvedBlocks < size - 2) {
						AudioFX.playSolvedFX();
					}
					dispatch({ type: "set_block_type_solved", payload: state.selectedBlock });
					dispatch({ type: "set_block_type_solved", payload: blockIndex });
					dispatch({ type: "add_solved_blocks" });
				} else {
					dispatch({ type: "set_block_type_idle", payload: state.selectedBlock });
					dispatch({ type: "set_block_type_idle", payload: blockIndex });
				}

				dispatch({ type: "add_turn" });
				dispatch({ type: "blocked_game", payload: false });
			}, 1000);

			dispatch({ type: "selected_block", payload: undefined });
		}
	};

	useEffect(() => {
		if (state.amountOfSolvedBlocks === size) {
			AudioFX.playBestFX();
			modal.showModal("", <WinModal turn={state.turn} handleChangeBest={best.handleChangeBest} />, () => {
				dispatch({ type: "initial_state", payload: size });
			});
		}
	}, [state.amountOfSolvedBlocks]);

	return (
		<>
			<Modal modalData={modal.modalData} />
			<Container fluid className="d-flex flex-column h-100 w-100 container">
				<Header showModal={modal.showModal} />
				<Score turn={state.turn} best={best.value} />

				<BlockContainer blocks={state.blocks} onBlockClick={onBlockClick} />
			</Container>
		</>
	);
};

export default App;
