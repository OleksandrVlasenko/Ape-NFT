import { DiscordIcon } from "components/svg/DiscordIcon/DiscordIcon";
import { OpenSeaIcon } from "components/svg/OpenSeaIcon/OpenSeaIcon";
import { SocialXIcon } from "components/svg/SocialXIcon/SocialXIcon";
import { SocialNetworksList, SocialLink } from "./SocialNetworks.styled";

const SocialNetworks = () => {
	return (
		<SocialNetworksList>
			<li>
				<SocialLink
					href="https://discord.com/"
					target="blank"
					rel="nofollow noreferrer noopener"
				>
					<DiscordIcon width={16} height={16} />
				</SocialLink>
			</li>
			<li>
				<SocialLink
					href="https://opensea.io/"
					target="blank"
					rel="nofollow noreferrer noopener"
				>
					<OpenSeaIcon width={16} height={16} />
				</SocialLink>
			</li>
			<li>
				<SocialLink
					href="https://twitter.com/"
					target="blank"
					rel="nofollow noreferrer noopener"
				>
					<SocialXIcon width={16} height={16} />
				</SocialLink>
			</li>
		</SocialNetworksList>
	);
};

export { SocialNetworks };
