import PropTypes from "prop-types";

import { Section } from "sections/About/About.styled";
import { Title } from "sections/FAQ/FAQ.styled";

const Arts = ({ ref4 }) => {
  return (
    <Section ref={ref4}>
      <Title>Collection</Title>
      <ul>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
      </ul>
    </Section>
  );
};

Arts.propTypes = {
  ref4: PropTypes.object,
};

export { Arts };
