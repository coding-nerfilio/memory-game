const WinModal = (props: { turn: number; handleChangeBest: (a: number) => boolean }) => {
	return (
		<>
			<h1>YOU WIN!</h1>
			<h3 className="mt-5">Score: {props.turn}</h3>
			<h6>The lower the better</h6>
			{props.handleChangeBest(props.turn) && <h2 className="mt-5 rainbow	">NEW HIGH</h2>}
		</>
	);
};

export default WinModal;
