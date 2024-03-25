import PropTypes from "prop-types";

import { DiscordIcon } from "components/svg/DiscordIcon/DiscordIcon";
import { OpenSeaIcon } from "components/svg/OpenSeaIcon/OpenSeaIcon";
import { SocialXIcon } from "components/svg/SocialXIcon/SocialXIcon";
import { SocialNetworksList, SocialLink } from "./SocialNetworks.styled";

const SocialNetworks = ({ onToogle, isOpen, width }) => {
  return (
    <SocialNetworksList className={isOpen ? "isOpen" : ""}>
      <li>
        <SocialLink
          onClick={onToogle}
          href="https://discord.com/"
          target="blank"
          rel="nofollow noreferrer noopener"
        >
          <DiscordIcon width={width < 768 ? 16 : 24} height={width < 768 ? 16 : 24} />
        </SocialLink>
      </li>
      <li>
        <SocialLink
          onClick={onToogle}
          href="https://opensea.io/"
          target="blank"
          rel="nofollow noreferrer noopener"
        >
          <OpenSeaIcon width={width < 768 ? 16 : 24} height={width < 768 ? 16 : 24} />
        </SocialLink>
      </li>
      <li>
        <SocialLink
          onClick={onToogle}
          href="https://twitter.com/"
          target="blank"
          rel="nofollow noreferrer noopener"
        >
          <SocialXIcon width={width < 768 ? 16 : 24} height={width < 768 ? 16 : 24} />
        </SocialLink>
      </li>
    </SocialNetworksList>
  );
};

SocialNetworks.propTypes = {
  onToogle: PropTypes.func,
  isOpen: PropTypes.bool,
  width: PropTypes.number,
};

export { SocialNetworks };
