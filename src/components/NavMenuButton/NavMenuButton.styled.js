import styled from "@emotion/styled";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;

  background-color: var(--secondary-accent-color-transparent);
  backdrop-filter: blur(6px);
  border-radius: 12px;

  color: var(--secondary-accent-color);

  font-family: "Messina Sans Mono";
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  text-transform: uppercase;

  &:hover {
    color: var(--text-color);
  }

  &.isOpen {
    border-radius: 0;

    @media (max-width: 767px) {
      color: var(--text-color);
      background-color: var(--text-color-transparent);
    }
  }
`;

export { Button };
