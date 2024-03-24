import styled from "@emotion/styled";

const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;

  padding: 60px 0 24px 0;

  &.isOpen {
    margin-bottom: 54px;
  }
`;

const Copyright = styled.p`
  width: 216px;

  color: var(--text-color);

  text-align: center;
  font-family: "Messina Sans Mono";
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-transform: uppercase;
`;

export { FooterStyled, Copyright };
