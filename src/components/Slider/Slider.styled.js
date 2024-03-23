import styled from "@emotion/styled";

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 48px;
	width: 200px;
	margin-right: auto;
	margin-left: auto;
	margin-top: 24px;
`;

const SliderButton = styled.button`
	background-color: transparent;

	color: var(--text-color);

	font-family: "Biro Script Plus";
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;

	&:hover {
		color: var(--accent-color);
	}
`;

export { ButtonContainer, SliderButton };
