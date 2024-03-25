import styled from "@emotion/styled";

const LogoContainer = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  /* z-index: 10; */

  color: var(--secondary-accent-color);

  &:hover {
    color: var(--text-color);
  }

  &.isOpen {
    color: var(--text-color);
  }

  @media (min-width: 768px) {
    top: 20px;
    left: 28px;
  }

  @media (min-width: 1280px) {
    top: 39px;
    left: 40px;
  }

  @media (min-width: 1440px) {
    left: 112px;
  }
`;

export { LogoContainer };
