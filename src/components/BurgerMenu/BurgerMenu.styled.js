import styled from "@emotion/styled";

const BurgerMenuContainer = styled.div`
  position: fixed;
  top: 54px;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: end;

  background-color: var(--background-color);

  @media (min-width: 480px) {
    width: 480px;
  }
`;

export { BurgerMenuContainer };
