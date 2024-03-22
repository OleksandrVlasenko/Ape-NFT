import { DiscordIcon } from "components/svg/DiscordIcon/DiscordIcon";
import { OpenSeaIcon } from "components/svg/OpenSeaIcon/OpenSeaIcon";
import { SocialXIcon } from "components/svg/SocialXIcon/SocialXIcon";

const SocialNetworks = () => {
	return (
		<ul>
			<li>
				<a
					href="https://discord.com/"
					target="blank"
					rel="nofollow noreferrer noopener"
				>
					<div>
						<DiscordIcon width={30} height={30} />
					</div>
				</a>
			</li>
			<li>
				<a
					href="https://opensea.io/"
					target="blank"
					rel="nofollow noreferrer noopener"
				>
					<div>
						<OpenSeaIcon width={30} height={30} />
					</div>
				</a>
			</li>
			<li>
				<a
					href="https://twitter.com/"
					target="blank"
					rel="nofollow noreferrer noopener"
				>
					<div>
						<SocialXIcon width={30} height={30} />
					</div>
				</a>
			</li>
		</ul>
	);
};

export { SocialNetworks };
