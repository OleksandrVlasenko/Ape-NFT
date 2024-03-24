import styled from "@emotion/styled";

const LogoContainer = styled.div`
position: absolute;
top: 16px;
left: 16px;

	color: var(--secondary-accent-color);

	&:hover {
		color: var(--text-color);
	}

	&.isOpen {
		color: var(--text-color);
	}
`;

export { LogoContainer };
