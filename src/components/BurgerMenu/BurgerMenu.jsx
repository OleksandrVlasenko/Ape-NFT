import { createPortal } from "react-dom";
import { BurgerMenuContainer } from "./BurgerMenu.styled";
// import PropTypes from "prop-types";
import { Logo } from "components/Logo/Logo";
import { NavMenu } from "components/NavMenu/NavMenu";
import { NavMenuButton } from "components/NavMenuButton/NavMenuButton";
import { SocialNetworks } from "components/SocialNetworks/SocialNetworks";
import { Footer } from "sections/Footer/Footer";

const BugrerMenu = () => {
  return (
    <>
      {createPortal(
        <BurgerMenuContainer>
          <Logo />
          <NavMenuButton />
          <SocialNetworks />
          <NavMenu />
          <Footer />
        </BurgerMenuContainer>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

// BugrerMenu.propTypes = {
//   children: PropTypes.node,
// };

export { BugrerMenu };
