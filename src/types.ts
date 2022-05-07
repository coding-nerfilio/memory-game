type Block = {
	id: number;
	type: "idle" | "hovered" | "selected" | "solved";
};

type GameState = {
	blocks: Array<Block>;
	selectedBlock?: number;
	blockedGame: boolean;
	amountOfSolvedBlocks: number;
	turn: number;
};

interface Ireducer {
	(
		state: GameState,
		action: {
			type:
				| "selected_block"
				| "blocked_game"
				| "add_solved_blocks"
				| "add_turn"
				| "set_block_type_selected"
				| "set_block_type_solved"
				| "set_block_type_idle"
				| "initial_state";
			payload?: any;
			index?: number;
		}
	): GameState;
}

interface onBlockClick {
	(id: number, blockIndex: number): void;
}

export { Ireducer, GameState, Block, onBlockClick };
