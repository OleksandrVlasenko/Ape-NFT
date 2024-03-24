import { Form } from "components/Form/Form";
import { Section } from "sections/About/About.styled";
import { Title } from "sections/FAQ/FAQ.styled";

const ContactUs = () => {
  return (
    <Section>
      <Title>Are you in?</Title>
      <div>X</div>
      <p>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </p>
      <Form/>
    </Section>
  );
};

export { ContactUs };
