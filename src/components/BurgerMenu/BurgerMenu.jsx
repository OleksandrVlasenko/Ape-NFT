import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { BurgerMenuContainer } from "./BurgerMenu.styled";

import { Logo } from "components/Logo/Logo";
import { NavMenu } from "components/NavMenu/NavMenu";
import { NavMenuButton } from "components/NavMenuButton/NavMenuButton";
import { SocialNetworks } from "components/SocialNetworks/SocialNetworks";
import { Footer } from "sections/Footer/Footer";
import { NavMenuContainer } from "sections/Header/Header.styled";

const BugrerMenu = ({ onToogle, isOpen, width, ref1, ref2, ref3, ref4, ref5 }) => {
  return (
    <>
      {createPortal(
        <BurgerMenuContainer>
          <Logo onToogle={onToogle} isOpen={isOpen} />
          <NavMenuContainer>
            <NavMenuButton onToogle={onToogle} isOpen={isOpen} width={width}/>
          </NavMenuContainer>
          <SocialNetworks onToogle={onToogle} isOpen={isOpen} />
          <NavMenu
            onToogle={onToogle}
            ref1={ref1}
            ref2={ref2}
            ref3={ref3}
            ref4={ref4}
            ref5={ref5}
          />
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
  width: PropTypes.number,
  ref1: PropTypes.object,
  ref2: PropTypes.object,
  ref3: PropTypes.object,
  ref4: PropTypes.object,
  ref5: PropTypes.object,
};

export { BugrerMenu };
