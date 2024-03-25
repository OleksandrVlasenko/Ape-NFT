import PropTypes from "prop-types";

import { Button } from "./NavMenuButton.styled";

const NavMenuButton = ({ onToogle, isOpen, width }) => {
  return (
    <Button onClick={onToogle} type="button" className={isOpen ? "isOpen" : ""}>
      {isOpen ? "Close" : "Menu"}
    </Button>
  );
};

Button.propTypes = {
  onToogle: PropTypes.func,
  isOpen: PropTypes.bool,
  width: PropTypes.number,
};

export { NavMenuButton };
