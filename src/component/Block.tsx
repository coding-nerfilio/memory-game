import { Col } from "react-bootstrap";
import { Block as BlockType, onBlockClick } from "../types";

const Block = (props: { data: BlockType; index: number; onBlockClick: onBlockClick }) => {
	return (
		<Col
			xs={2}
			className={`p-0 m-0 d-flex justify-content-center align-items-center block ${props.data.type}`}
			onClick={() => props.onBlockClick(props.data.id, props.index)}
		>
			<div className="text text-white">{props.data.id + 1}</div>
		</Col>
	);
};

export default Block;
