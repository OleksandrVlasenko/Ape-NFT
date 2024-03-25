import styled from "@emotion/styled";

const Section = styled.section`
  padding-top: 60px;
`;

const MindMapList = styled.ul`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 24px;
  }
`;

const MindMapItem = styled.div`
  padding: 24px 12px;

  width: 216px;
  height: 242px;

  border-radius: 12px;

  background: var(--secondary-accent-color);

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 0 auto;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-rows: 3fr 1fr;

    padding: 24px;

    width: 284px;

    border-radius: 16px;
  }

  @media (min-width: 1280px) {
    width: 504px;
    height: 480px;

    border-radius: 24px;
  }
`;

const Name = styled.h3`
  color: var(--text-color);

  font-family: "Right Grotesk";
  font-size: 32px;
  font-weight: 900;
  line-height: 32px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    align-self: end;
  }

  @media (min-width: 1280px) {
    font-size: 64px;
    line-height: 64px;
  }
`;

const Description = styled.p`
  color: var(--text-color);

  font-family: "Messina Sans Mono";
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    justify-self: end;

    width: 127px;
  }

  @media (min-width: 1280px) {
    width: 228px;

    font-size: 24px;
    line-height: 29px;
  }
`;

const MindMapLink = styled.a`
  height: 242px;

  background: var(--accent-color);
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    flex-shrink: 0;

    margin: 0 auto;
    padding: 24px 12px;

    width: 216px;

    border-radius: 12px;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-rows: 1fr 3fr;

    padding: 24px;

    width: 284px;

    border-radius: 16px;
  }

  @media (min-width: 1280px) {
    width: 504px;
    height: 480px;

    border-radius: 24px;
  }
`;

const IconContainer = styled.div`
  padding: 12px;

  color: var(--text-color);

  @media (min-width: 768px) {
    justify-self: end;
		align-self: start;
  }

  @media (min-width: 1280px) {

  }
`;

export {
  Section,
  MindMapList,
  MindMapItem,
  Name,
  Description,
  MindMapLink,
  IconContainer,
};
