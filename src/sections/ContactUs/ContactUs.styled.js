import styled from "@emotion/styled";

const IconContainer = styled.div`
  margin-bottom: 16px;

  color: var(--text-color);

  &.about {
    @media (min-width: 768px) {
      grid-area: i;
      justify-self: center;

      margin-top: 68px;
      margin-bottom: 24px;
    }

    @media (min-width: 1280px) {
      margin-top: 56px;
      margin-bottom: 36px;
    }
  }
`;

const Description = styled.p`
  margin-bottom: 16px;

  width: 216px;

  color: var(--text-color);

  text-align: center;
  font-family: "Messina Sans Mono";
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-transform: uppercase;
`;

export { IconContainer, Description };
