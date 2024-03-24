import PropTypes from "prop-types";

import { FooterStyled, Copyright } from "./Footer.styled";

const Footer = ({ isOpen }) => {
  return (
    <FooterStyled className={isOpen ? "isOpen" : ""}>
      <Copyright>© Yacht ape 2024 all rights reserved</Copyright>
    </FooterStyled>
  );
};

Footer.propTypes = {
  isOpen: PropTypes.bool,
};

export { Footer };
