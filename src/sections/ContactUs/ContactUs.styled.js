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

  &.contactUs {
    @media (min-width: 768px) {
      display: flex;
      justify-content: center;

      margin-bottom: 24px;
    }

    @media (min-width: 1280px) {
      margin-bottom: 40px;
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

  @media (min-width: 768px) {
    margin: 0 auto 24px auto;

    width: 397px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 40px;

    width: 581px;

    font-size: 24px;
    line-height: 29px;
  }
`;

export { IconContainer, Description };
