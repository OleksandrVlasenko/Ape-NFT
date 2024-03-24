import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { BurgerMenuContainer } from "./BurgerMenu.styled";

import { Logo } from "components/Logo/Logo";
import { NavMenu } from "components/NavMenu/NavMenu";
import { NavMenuButton } from "components/NavMenuButton/NavMenuButton";
import { SocialNetworks } from "components/SocialNetworks/SocialNetworks";
import { Footer } from "sections/Footer/Footer";
import { NavMenuContainer } from "sections/Header/Header.styled";

const BugrerMenu = ({ onToogle, isOpen }) => {
  return (
    <>
      {createPortal(
        <BurgerMenuContainer>
          <Logo onToogle={onToogle} isOpen={isOpen} />
          <NavMenuContainer>
            <NavMenuButton onToogle={onToogle} isOpen={isOpen} />
          </NavMenuContainer>
          <SocialNetworks onToogle={onToogle} isOpen={isOpen} />
          <NavMenu onToogle={onToogle} />
          <Footer isOpen={isOpen} />
        </BurgerMenuContainer>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

BugrerMenu.propTypes = {
  onToogle: PropTypes.func,
  isOpen: PropTypes.bool,
};

export { BugrerMenu };
