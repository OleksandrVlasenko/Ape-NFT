import styled from "@emotion/styled";

const Nav = styled.nav`
  @media (max-width: 767px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 54px));

    overflow: hidden;
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

  @media (min-width: 768px) {
    opacity: 0;
    visibility: hidden;
    transform: translateX(100%);
    transition: transform 300ms linear, opacity 300ms linear;
  }

  &.isOpen {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
    border-radius: -12px;
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

  @media (min-width: 1280px) {
    width: 80px;
    height: 80px;

    font-size: 16px;
    line-height: 19px;
  }
`;

export { Nav, NavList, NavLink };
