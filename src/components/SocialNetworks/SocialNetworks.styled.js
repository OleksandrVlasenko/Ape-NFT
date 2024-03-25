import styled from "@emotion/styled";

const SocialNetworksList = styled.ul`
  position: absolute;
  top: 64px;
  right: 16px;
  /* z-index: 10; */

  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    top: 68px;
    right: 28px;

    border-radius: 12px;
  }

  @media (min-width: 1280px) {
    top: 120px;
    right: 40px;

    gap: 16px;
  }

  @media (min-width: 1440px) {
    right: 112px;
  }
`;

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;

  border-radius: 8px;
  background: var(--secondary-accent-color-transparent);

  backdrop-filter: blur(6px);

  color: var(--secondary-accent-color);

  &:hover {
    color: var(--text-color);
  }

  .isOpen & {
    color: var(--text-color);
    background-color: var(--text-color-transparent);
  }

  @media (min-width: 768px) {
    border-radius: 12px;
  }

  @media (min-width: 1280px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 1440px) {
    right: 112px;
  }
`;

export { SocialNetworksList, SocialLink };
