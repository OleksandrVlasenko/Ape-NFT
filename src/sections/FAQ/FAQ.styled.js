import styled from "@emotion/styled";

const Title = styled.h2`
	margin-bottom: 24px;

	color: var(--text-color);

	font-family: "Right Grotesk";
	font-size: 44px;
	font-weight: 900;
	line-height: 40px;
	text-transform: uppercase;
	text-align: center;
`;

const Number = styled.p`
	color: var(--accent-color);

	font-family: "Biro Script Plus";
	font-size: 12px;
	font-weight: 400;
	line-height: 20px;
`;

const Name = styled.h3`
	color: var(--text-color);

	font-family: "Right Grotesk";
	font-size: 20px;
	font-weight: 900;
	line-height: 20px;
	text-transform: uppercase;
`;

const Description = styled.p`
	margin-top: -50px;

	color: var(--text-color);

	font-family: "Messina Sans Mono";
	font-size: 12px;
	font-weight: 400;
	line-height: 14px;
	text-transform: uppercase;

	opacity: 0;
	visibility: hidden;

	&.active {
		margin-top: 0;
		color: red;
		opacity: 1;
		visibility: visible;
		transition: margin-top 300ms linear, opacity 300ms linear 300ms;
	}
`;

const DeckriptionContainer = styled.div`
	height: auto;

	overflow: hidden;
`;

export { Title, Number, Name, Description, DeckriptionContainer };
