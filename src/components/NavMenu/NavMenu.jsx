import PropTypes from "prop-types";
import gsap from "gsap";

import { NavList, NavLink, Nav } from "./NavMenu.styled";

const NavMenu = ({ onToogle, ref1, ref2, ref3, ref4, ref5 }) => {
  const scrollTo = (target) => {
    gsap.to(window, { duration: 1, scrollTo: target });
  };
  return (
    <Nav>
      <NavList>
        <li>
          <NavLink
            onClick={() => {
              onToogle();
              scrollTo(ref1.current);
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              onToogle();
              scrollTo(ref2.current);
            }}
          >
            M-Map
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              onToogle();
              scrollTo(ref3.current);
            }}
          >
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              onToogle();
              scrollTo(ref4.current);
            }}
          >
            Arts
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              onToogle();
              scrollTo(ref5.current);
            }}
          >
            Mint
          </NavLink>
        </li>
      </NavList>
    </Nav>
  );
};

NavMenu.propTypes = {
  onToogle: PropTypes.func,
  ref1: PropTypes.object,
  ref2: PropTypes.object,
  ref3: PropTypes.object,
  ref4: PropTypes.object,
  ref5: PropTypes.object,
};

export { NavMenu };
