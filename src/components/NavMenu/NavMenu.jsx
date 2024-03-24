import PropTypes from "prop-types";

import { NavList, NavLink, Nav } from "./NavMenu.styled";

const NavMenu = ({ onToogle }) => {
  return (
    <Nav>
      <NavList>
        <li>
          <NavLink onClick={onToogle}>About</NavLink>
        </li>
        <li>
          <NavLink onClick={onToogle}>M-Map</NavLink>
        </li>
        <li>
          <NavLink onClick={onToogle}>FAQ</NavLink>
        </li>
        <li>
          <NavLink onClick={onToogle}>Arts</NavLink>
        </li>
        <li>
          <NavLink onClick={onToogle}>Mint</NavLink>
        </li>
      </NavList>
    </Nav>
  );
};

NavMenu.propTypes = {
  onToogle: PropTypes.func,
};

export { NavMenu };
