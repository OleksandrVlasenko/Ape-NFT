import PropTypes from "prop-types";

import { LogoIcon } from "components/svg/LogoIcon/LogoIcon";
import { LogoContainer } from "./Logo.styled";

const Logo = ({ onToogle, isOpen }) => {
  return (
    <LogoContainer onClick={onToogle} className={isOpen ? "isOpen" : ""}>
      <LogoIcon width={48} height={32} />
    </LogoContainer>
  );
};

Logo.propTypes = {
  onToogle: PropTypes.func,
  isOpen: PropTypes.bool,
};

export { Logo };
