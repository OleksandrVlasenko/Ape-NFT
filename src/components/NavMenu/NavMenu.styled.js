import styled from "@emotion/styled";

const NavList = styled.ul`
	display: flex;
`;

const NavLink = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 48px;
	height: 48px;

	background: var(--secondary-accent-color-transparent);
	backdrop-filter: blur(6px);

	color: var(--secondary-accent-color);

	font-family: "Messina Sans Mono";
	font-size: 12px;
	font-weight: 600;
	line-height: 14px;
	text-transform: uppercase;

	&:hover {
		color: var(--text-color);
	}
`;

export { NavList, NavLink };
