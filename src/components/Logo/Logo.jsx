import { LogoIcon }  from "components/svg/LogoIcon/LogoIcon";
import { LogoContainer } from "./Logo.styled";

const Logo = () => {
  return (
		<LogoContainer>
			<LogoIcon width={30} height={30} />
		</LogoContainer>
	);
}

export {Logo}