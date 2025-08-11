import { Button, Container, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import business from "@/public/pexels-fauxels-3184660.jpg";

const About = () => {
  return (
    <div className="pt-20 py-28">
      <Container width={{ initial: "85%" }}>
        <Grid
          columns={{ initial: "1", md: "2" }}
          gap={{ initial: "6", md: "8" }}
        >
          <Image src={business} alt="A business man coding" />
          <Flex
            justify="center"
            direction="column"
            gap={{ initial: "3", md: "5" }}
          >
            <Text as="p" weight="light" size={{ initial: "3", md: "5" }}>
              ABOUT US
            </Text>
            <Heading as="h2" size={{ initial: "6", md: "8" }}>
              ABOUT QODEBYTE TECH ACADEMY?
            </Heading>
            <Text
              as="p"
              className="text-justify"
              size={{ initial: "2", md: "4" }}
              color="gray"
            >
              Qodebyte is a modern tech academy dedicated to equipping learners
              with the skills needed to thrive in today’s digital world.
              Covering everything from web and mobile development to UI/UX
              design, data science, cybersecurity, and emerging technologies,
              Qodebyte offers a comprehensive, hands-on learning experience.
              With expert instructors, real-world projects, and an emphasis on
              both technical mastery and creative problem-solving, Qodebyte
              empowers students of all levels, whether beginners or
              professionals, to build, innovate, and excel in the ever-evolving
              tech landscape.
            </Text>
            <Button style={{ padding: "1.5rem", width: "9rem" }}>
              Learn More
            </Button>
          </Flex>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
