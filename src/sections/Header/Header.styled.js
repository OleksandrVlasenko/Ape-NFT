import styled from "@emotion/styled";

const HeaderStyled = styled.header`
  position: absolute;

  width: 100%;

  @media (min-width: 480px) {
    width: 480px;
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const NavMenuContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;

  /* z-index: 10000; */

  display: flex;

  width: fit-content;

  border-radius: 8px;

  overflow: hidden;

  @media (min-width: 768px) {
    top: 12px;
    right: 28px;

    border-radius: 12px;
  }

  @media (min-width: 1280px) {
    top: 24px;
    right: 40px;
  }

  @media (min-width: 1440px) {
    right: 112px;
  }
`;

export { HeaderStyled, NavMenuContainer };
