import styled from "@emotion/styled";

const Nav = styled.nav`
  @media (max-width: 767px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 54px));
  }
`;

const NavList = styled.ul`
  display: flex;

  @media (max-width: 767px) {
    display: inline-flex;
    flex-direction: column;
		align-items: center;
    gap: 16px;
  }
`;

const NavLink = styled.p`
  height: 40px;
  color: var(--text-color);

  font-family: "Messina Sans Mono";
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 48px;
    height: 48px;

    background: var(--secondary-accent-color-transparent);
    backdrop-filter: blur(6px);

    color: var(--secondary-accent-color);

    font-size: 12px;
    font-weight: 600;
    line-height: 14px;

    &:hover {
      color: var(--text-color);
    }
  }
`;

export { Nav, NavList, NavLink };
