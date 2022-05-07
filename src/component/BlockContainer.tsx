import { Col, Row } from "react-bootstrap";
import { Block as BlockType, onBlockClick } from "../types";
import Block from "./Block";

const BlockContainer = (props: { blocks: Array<BlockType>; onBlockClick: onBlockClick }) => {
	return (
		<Row className=" h-100 px-4 justify-content-center align-items-center">
			<Col md={4}>
				<Row>
					{props.blocks.map((b, i) => (
						<Block data={b} index={i} onBlockClick={props.onBlockClick} />
					))}
				</Row>
			</Col>
		</Row>
	);
};

export default BlockContainer;
