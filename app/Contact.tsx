import { Flex, Button, Container, Grid, Heading, Text } from "@radix-ui/themes";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
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
