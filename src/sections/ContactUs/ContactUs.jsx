import PropTypes from "prop-types";

import { Form } from "components/Form/Form";
import { Section } from "sections/About/About.styled";
import { Title } from "sections/FAQ/FAQ.styled";
import { Description, IconContainer } from "./ContactUs.styled";
import { XIcon } from "components/svg/XIcon/XIcon";

const ContactUs = ({ ref5 }) => {
  return (
    <Section ref={ref5}>
      <Title>Are you in?</Title>
      <IconContainer>
        <XIcon width={36} height={36} />
      </IconContainer>
      <Description>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </Description>
      <Form />
    </Section>
  );
};

ContactUs.propTypes = {
  ref4: PropTypes.object,
};

export { ContactUs };
