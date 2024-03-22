import { SocialNetworks } from "components/SocialNetworks/SocialNetworks";
import { Logo } from "components/Logo/Logo";

const Header = () => {
	return (
		<header>
			<Logo/>
			<div>MENU</div>
			<SocialNetworks />
		</header>
	);
};

export { Header };
