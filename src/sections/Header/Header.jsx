import { SocialNetworks } from "components/SocialNetworks/SocialNetworks";
import { Logo } from "components/Logo/Logo";
import { HeaderStyled, NavMenuContainer } from "./Header.styled";
import { NavMenu } from "components/NavMenu/NavMenu";
import { NavMenuButton } from "components/NavMenuButton/NavMenuButton";

const Header = () => {
	return (
		<HeaderStyled>
			<Logo />
			<NavMenuContainer>
				{false && <NavMenu />}
				<NavMenuButton />
			</NavMenuContainer>

			<SocialNetworks />
		</HeaderStyled>
	);
};

export { Header };
