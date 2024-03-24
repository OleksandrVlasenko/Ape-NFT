import styled from "@emotion/styled";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 60px;
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
`;

export { Section, Title, Description, Text };
