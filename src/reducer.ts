import { Block, GameState, Ireducer } from "./types";

const generateBlocks = (size: number): Array<Block> => {
	const uniqueBlocks = size / 2;
	let blocks = Array(size).fill(-1);

	for (let i = 0; i < uniqueBlocks; i++) {
		let assignedBlocks = 0;
		while (assignedBlocks < 2) {
			let randomIndex = Math.floor(Math.random() * (size - 0)) + 0;
			if (blocks[randomIndex] === -1) {
				blocks[randomIndex] = i;
				assignedBlocks++;
			}
		}
	}

	return blocks.map((v) => ({ id: v, type: "idle" }));
};

const initialState = (size: number): GameState => ({
	blocks: generateBlocks(size),
	selectedBlock: undefined,
	blockedGame: false,
	amountOfSolvedBlocks: 0,
	turn: 0,
});

const reducer: Ireducer = (state, action) => {
	switch (action.type) {
		case "add_solved_blocks": {
			return { ...state, amountOfSolvedBlocks: state.amountOfSolvedBlocks + 2 };
		}
		case "blocked_game": {
			return { ...state, blockedGame: action.payload };
		}
		case "selected_block": {
			return { ...state, selectedBlock: action.payload };
		}
		case "add_turn": {
			return { ...state, turn: state.turn + 1 };
		}
		case "set_block_type_selected": {
			let blocks = state.blocks;
			blocks[action.payload].type = "selected";
			return { ...state, blocks };
		}
		case "set_block_type_solved": {
			let blocks = state.blocks;
			blocks[action.payload].type = "solved";
			return { ...state, blocks };
		}
		case "set_block_type_idle": {
			let blocks = state.blocks;
			blocks[action.payload].type = "idle";
			return { ...state, blocks };
		}
		case "initial_state": {
			return initialState(action.payload);
		}
		default:
			throw new Error();
	}
};

export { initialState, reducer };
