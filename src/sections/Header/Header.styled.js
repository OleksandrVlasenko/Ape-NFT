import styled from "@emotion/styled";

const HeaderStyled = styled.header`
	position: absolute;

	padding-right: 16px;
	padding-left: 16px;

	margin-top: 16px;

	width: 480px;
`;

const NavMenuContainer = styled.div`
	display: flex;

	width: fit-content;

	border-radius: 8px;

	overflow: hidden;

	@media (min-width: 768px) {
		border-radius: 12px;
	}
`;

export { HeaderStyled, NavMenuContainer };
