import styled from "@emotion/styled";

const MindMapItem = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: 216px;
	height: 242px;

	padding: 24px 12px;

	border-radius: 12px;

	background: var(--secondary-accent-color);
`;

const Name = styled.h3`
	color: var(--text-color);

	font-family: "Right Grotesk";
	font-size: 32px;
	font-weight: 900;
	line-height: 32px;
	text-transform: uppercase;
`;

const Description = styled.p`
	color: var(--text-color);

	font-family: "Messina Sans Mono";
	font-size: 12px;
	font-weight: 400;
	line-height: 14px;
	text-transform: uppercase;
`;

export { MindMapItem, Name, Description };
