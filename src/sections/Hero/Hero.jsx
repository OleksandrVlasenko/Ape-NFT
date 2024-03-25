import PropTypes from "prop-types";
import gsap from "gsap";

import {
  Section,
  Title,
  Text,
  Description,
  Button,
  Container,
  Aaa,
} from "./Hero.styled";

const Hero = ({ ref5 }) => {
  const scrollTo = (target) => {
    gsap.to(window, { duration: 1, scrollTo: target });
  };
  return (
    <Section>
      <Text>diD yOu seE iT ?</Text>
      <Title>
        <span>YACHT</span> <span>APES</span>
      </Title>
      <Text>Apes aRe eveRywhere</Text>
      <Aaa>
        <Container>
          <Button
            onClick={() => {
              scrollTo(ref5.current);
            }}
            type="button"
          >
            Meet apes
          </Button>
          <Description>
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </Description>
        </Container>
      </Aaa>
    </Section>
  );
};

Hero.propTypes = {
  ref5: PropTypes.object,
};

export { Hero };
