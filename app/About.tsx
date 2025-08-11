import { Container } from "@radix-ui/themes";

import { AboutPageAnimation } from "./Animations";

const About = () => {
  return (
    <div className="pt-20 py-28" id="about">
      <Container width={{ initial: "85%" }}>
        <AboutPageAnimation />
      </Container>
    </div>
  );
};

export default About;
