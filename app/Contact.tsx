import { Container } from "@radix-ui/themes";
import { ContactAnimation } from "./Animations";

const Contact = () => {
  return (
    <div className="w-full py-24 bg-gray-100" id="contact">
      <Container width={{ initial: "85%" }}>
        <ContactAnimation />
      </Container>
    </div>
  );
};

export default Contact;
