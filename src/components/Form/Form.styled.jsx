import styled from "@emotion/styled";

const Label = styled.label`
  position: relative;

  display: flex;

  margin-bottom: 16px;
`;

const Input = styled.input`
  display: flex;
  align-items: center;

  width: 168px;
  height: 48px;
  padding: 0 24px;

  background-color: inherit;

  border-radius: 0px 8px 8px 0px;
  border: 1px solid var(--text-color);

  color: var(--text-color);

  font-family: "Messina Sans Mono";
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-transform: uppercase;

  &.isError {
    color: var(--accent-color);
    border-color: var(--accent-color);
  }

  &::placeholder {
    color: #ffffff3d;
  }

  &:focus-visible {
    outline: none;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;

  color: #5a65f2;

  border-radius: 8px 0px 0px 8px;

  background: var(--secondary-accent-color);

  backdrop-filter: blur(6px);

  &:hover {
    cursor: pointer;
  }
`;

const ErrorMessage = styled.p`
  position: absolute;
  right: 0;
  bottom: -12px;

  color: var(--accent-color);

  text-align: right;
  font-family: "Messina Sans Mono";
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  text-transform: uppercase;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;

  width: 216px;
  padding: 10px 0 12px 0;

  border-radius: 8px;
  background: var(--accent-color);

  backdrop-filter: blur(6px);

  color: var(--text-color);

  font-family: "Right Grotesk";
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
  text-transform: uppercase;

  &:hover {
    color: var(--secondary-accent-color);
  }
`;

export { Label, Input, IconContainer, ErrorMessage, Button };
