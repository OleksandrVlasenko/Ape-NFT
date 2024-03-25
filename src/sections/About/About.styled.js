import styled from "@emotion/styled";

const Section = styled.section`
  padding-top: 60px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    padding: 80px 88px 0 88px;
  }

  @media (min-width: 1280px) {
    padding: 120px 108px 0 108px;
  }

  @media (min-width: 1440px) {
    padding: 120px 204px 0 204px;
  }

  &.about {
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 48px;

      grid-template-areas:
        "t d"
        "i ."
        "text .";
    }

    @media (min-width: 1280px) {
      column-gap: 85px;
    }
  }

  &.mindMap {
    @media (max-width: 767px) {
      display: block;
    }
  }

  &.contactUs {
    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Title = styled.h2`
  width: 216px;
  margin-bottom: 16px;

  color: var(--text-color);

  font-family: "Right Grotesk";
  font-size: 40px;
  font-weight: 900;
  line-height: 40px;
  text-transform: uppercase;

  & span {
    color: var(--accent-color);
  }
  @media (min-width: 768px) {
    grid-area: t;

    margin-bottom: 0;

    width: 269px;

    font-size: 60px;
    line-height: 60px;
  }

  @media (min-width: 1280px) {
    width: 538px;

    font-size: 120px;
    line-height: 120px;
  }
`;

const Description = styled.p`
  margin-bottom: 36px;
  width: 216px;

  color: var(--text-color);

  text-align: right;
  font-family: "Messina Sans Mono";
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    grid-area: d;
    align-self: start;

    margin-bottom: 0px;
    margin-top: 11px;

    width: 275px;

    text-align: right;
  }

  @media (min-width: 1280px) {
    margin-top: 24px;

    width: 409px;

    font-size: 24px;
    line-height: 29px;
  }
`;

const Text = styled.p`
  width: 216px;

  color: var(--text-color);

  text-align: center;
  font-family: "Messina Sans Mono";
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    grid-area: text;

    margin-bottom: 36px;

    width: 269px;

    font-size: 16px;
    line-height: 19px;
  }

  @media (min-width: 1280px) {
    justify-self: center;

    margin-bottom: 40px;

    width: 417px;

    color: #fff;

    font-size: 24px;
    line-height: 29px;
  }
`;

export { Section, Title, Description, Text };
