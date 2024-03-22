import styled from "@emotion/styled";

const Title = styled.h2`
	color: var(--text-color);

	font-family: "Right Grotesk";
	font-size: 44px;
	font-weight: 900;
	line-height: 40px;
	text-transform: uppercase;
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
	color: var(--text-color);

	font-family: "Messina Sans Mono";
	font-size: 12px;
	font-weight: 400;
	line-height: 14px;
	text-transform: uppercase;
`;

export { Title, Number, Name, Description };
