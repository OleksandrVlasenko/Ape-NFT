import styled from "@emotion/styled";

const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;

  padding: 60px 0 24px 0;

  @media (min-width: 768px) {
    padding: 80px 0 40px 0;
  }

  @media (min-width: 1280px) {
    padding: 120px 0 40px 0;
  }

  &.isOpen {
    margin-bottom: 54px;
  }
`;

const Copyright = styled.p`
  color: var(--text-color);

  text-align: center;
  font-family: "Messina Sans Mono";
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-transform: uppercase;

  @media (max-width: 767px) {
    width: 216px;
  }

  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

export { FooterStyled, Copyright };
