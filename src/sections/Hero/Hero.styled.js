import styled from "@emotion/styled";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 54px;
  margin-left: 8px;
  margin-right: 8px;

  padding-top: 36px;
  padding-bottom: 19px;

  height: 542px;

  border-radius: 12px;

  background-color: var(--accent-color);

  @media (min-width: 768px) {
    align-items: start;
    justify-content: center;

    margin-left: 16px;
    margin-right: 16px;
    border-radius: 16px;
    padding-top: 20px;
    padding-left: 72px;
    padding-right: 72px;

    height: 420px;
  }

  @media (min-width: 1280px) {
    border-radius: 24px;
    padding-left: 102px;
    padding-right: 102px;

    height: 676px;
  }

  @media (min-width: 1440px) {
    padding-left: 194px;
    padding-right: 194px;

    width: 1408px;
  }
`;

const Title = styled.h1`
  margin-bottom: 8px;

  color: var(--secondary-accent-color);

  font-family: "Right Grotesk";
  font-size: 44px;
  font-weight: 900;
  line-height: 44px;
  letter-spacing: 0.44px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;

    width: 100%;

    font-size: 92px;
    line-height: 92px;
    letter-spacing: 0.92px;
  }

  @media (min-width: 1280px) {
    font-size: 164px;
    line-height: 164px;
  }
`;

const Text = styled.p`
  color: var(--secondary-accent-color);

  font-family: "Biro Script Plus";
  font-size: 16px;
  font-weight: 900;
  line-height: 27px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 27px;
  }

  @media (min-width: 1280px) {
    font-size: 24px;
    line-height: 40px;
  }
`;

const Aaa = styled.div`
  position: relative;
  width: 100%;
  height: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 216px;

  @media (max-width: 767px) {
    position: absolute;
    left: 50%;
    top: 286px;
    transform: translateX(-50%);
  }

  @media (min-width: 768px) {
    position: absolute;
    top: -20px;
    right: 0;
    flex-direction: column-reverse;
    gap: 16px;

    width: 190px;
  }

  @media (min-width: 1280px) {
    top: -20px;

    gap: 28px;

    width: 337px;
  }
`;

const Description = styled.p`
  width: 100%;

  color: var(--secondary-accent-color);
  font-family: "Messina Sans Mono";
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px 0px 12px 0px;

  border-radius: 8px;
  background-color: var(--secondary-accent-color-transparent);

  color: var(--secondary-accent-color);

  font-family: "Right Grotesk";
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: 19px;

  cursor: pointer;

  &:hover {
    color: var(--text-color);
  }

  @media (min-width: 1280px) {
    padding: 16px 0 20px 0;

    font-size: 28px;
    line-height: 34px;
  }
`;

export { Section, Title, Text, Container, Description, Button, Aaa };
