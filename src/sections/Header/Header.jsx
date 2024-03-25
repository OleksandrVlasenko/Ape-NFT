import PropTypes from "prop-types";

import { SocialNetworks } from "components/SocialNetworks/SocialNetworks";
import { Logo } from "components/Logo/Logo";
import { HeaderStyled, NavMenuContainer } from "./Header.styled";
import { NavMenu } from "components/NavMenu/NavMenu";
import { NavMenuButton } from "components/NavMenuButton/NavMenuButton";
import { BugrerMenu } from "components/BurgerMenu/BurgerMenu";
import { useEffect, useState } from "react";
import { useWindowWidth } from "hooks/useWindowWidth";

const Header = ({ ref1, ref2, ref3, ref4, ref5 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState();

  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth) setWidth(windowWidth);
  }, [windowWidth]);

  useEffect(() => {
    if (isOpen && width < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen, width]);

  const toogleIsOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <HeaderStyled>
      <Logo />
      <NavMenuContainer>
        {width >= 768 && <NavMenu />}
        <NavMenuButton onToogle={toogleIsOpen} />
      </NavMenuContainer>
      <SocialNetworks />
      {width < 768 && isOpen && (
        <BugrerMenu
          onToogle={toogleIsOpen}
          isOpen={isOpen}
          ref1={ref1}
          ref2={ref2}
          ref3={ref3}
          ref4={ref4}
          ref5={ref5}
        />
      )}
    </HeaderStyled>
  );
};

Header.propTypes = {
  ref1: PropTypes.object,
  ref2: PropTypes.object,
  ref3: PropTypes.object,
  ref4: PropTypes.object,
  ref5: PropTypes.object,
};

export { Header };
