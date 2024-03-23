import { LogoIcon }  from "components/svg/LogoIcon/LogoIcon";
import { LogoContainer } from "./Logo.styled";

const Logo = () => {
  return (
		<LogoContainer>
			<LogoIcon width={48} height={32} />
		</LogoContainer>
	);
}

export {Logo}