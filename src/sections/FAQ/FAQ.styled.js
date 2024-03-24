import styled from "@emotion/styled";

const FaqItem = styled.li`
  display: flex;
  align-items: start;
  gap: 8px;

  padding: 8px 8px 10px 8px;

  width: 216px;

  border-radius: 12px;

  &.active {
    background-color: var(--secondary-accent-color);
  }
`;

const Title = styled.h2`
  margin-bottom: 24px;

  color: var(--text-color);

  font-family: "Right Grotesk";
  font-size: 44px;
  font-weight: 900;
  line-height: 40px;
  text-transform: uppercase;
  text-align: center;
`;

const Number = styled.p`
  width: 26px;

  color: var(--accent-color);

  font-family: "Biro Script Plus";
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
	text-align: center;

  &.active {
    color: var(--text-color);
  }

  li:hover & {
    color: var(--text-color);
  }
`;

const Name = styled.h3`
  color: var(--text-color);

  font-family: "Right Grotesk";
  font-size: 20px;
  font-weight: 900;
  line-height: 20px;
  text-transform: uppercase;

  &.active {
    margin-bottom: 10px;
    color: var(--accent-color);
  }

  li:hover & {
    color: var(--accent-color);
  }
`;

const Description = styled.p`
  margin-top: -130px;

  color: var(--text-color);

  font-family: "Messina Sans Mono";
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-transform: uppercase;

  opacity: 0;
  visibility: hidden;

  &.active {
    margin-top: 0;
    opacity: 1;
    visibility: visible;
    transition: margin-top 300ms linear, opacity 300ms linear 300ms;
  }
`;

const DeckriptionContainer = styled.div`
  height: auto;

  overflow: hidden;
`;

export { FaqItem, Title, Number, Name, Description, DeckriptionContainer };
