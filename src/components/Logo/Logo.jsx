import PropTypes from "prop-types";

import { LogoIcon } from "components/svg/LogoIcon/LogoIcon";
import { LogoContainer } from "./Logo.styled";

const Logo = ({ onToogle, isOpen, width }) => {
  return (
    <LogoContainer onClick={onToogle} className={isOpen ? "isOpen" : ""}>
      <LogoIcon width={width < 1280 ? 48 : 72} height={width < 1280 ? 32: 50} />
    </LogoContainer>
  );
};

Logo.propTypes = {
  onToogle: PropTypes.func,
  isOpen: PropTypes.bool,
  width: PropTypes.number,
};

export { Logo };
