import styled from "@emotion/styled";

const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-left: 8px;
	margin-right: 8px;

	padding-top: 36px;
	padding-bottom: 19px;

	border-radius: 12px;

	background-color: var(--accent-color);
`;

const Title = styled.h1`
	margin-bottom: 8px;

	color: var(--secondary-accent-color);

	font-family: "Right Grotesk";
	font-size: 44px;
	font-weight: 900;
	line-height: 44px;
	letter-spacing: 0.44px;
`;

const Text = styled.p`
	color: var(--secondary-accent-color);

	font-family: "Biro Script Plus";
	font-size: 16px;
	font-weight: 900;
	line-height: 27px;
`;

const Description = styled.p`
	width: 217px;

	color: var(--secondary-accent-color);
	font-family: "Messina Sans Mono";
	font-size: 12px;
	font-weight: 400;
	line-height: 14px;
	text-transform: uppercase;
	text-align: center;
`;

const Button = styled.button`
	width: 216px;
	padding: 10px 0px 12px 0px;
	margin-top: 286px;
  margin-bottom: 16px;

	border-radius: 8px;
	background-color: var(--secondary-accent-color-transparent);

	color: var(--secondary-accent-color);

	font-family: "Right Grotesk";
	font-size: 16px;
	font-style: normal;
	font-weight: 900;
	line-height: 19px;

	&:hover {
		color: var(--text-color);
	}
`;

export { Section, Title, Text, Description, Button };
