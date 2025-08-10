import { Box, Container, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { SiCodementor } from "react-icons/si";
import { FaBook } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const WhyUs = () => {
  const reasons = [
    {
      icon: <FaBook />,
      heading: "All-in-One Learning Hub",
      description:
        "Qodebyte gives you access to everything from coding to AI under one roof, so no juggling of multiple platforms",
    },
    {
      icon: <SiCodementor />,
      heading: "Expert Mentors",
      description:
        "Get guidance from seasoned tech professionals who know what employers are looking for.",
    },
    {
      icon: <FaProjectDiagram />,
      heading: "Hands-On Projects",
      description:
        "You’ll learn by doing, building real-world projects that you can showcase in your portfolio.",
    },
    {
      icon: <GiSkills />,
      heading: "Future-Proof Skills",
      description:
        "Stay ahead of the curve with courses that keep pace with the latest technologies and trends.",
    },
  ];
  return (
    <div className="w-full py-12">
      <Container width={{ initial: "85%" }}>
        <Grid
          columns={{ initial: "1", sm: "1", md: "30% 70%" }}
          align="center"
          justify="center"
          gap={{ initial: "3", sm: "0" }}
        >
          <Flex
            className="text-gray-900"
            direction="column"
            gap={{ initial: "3" }}
            align={{ initial: "center", md: "start" }}
          >
            <Text size={{ initial: "6", md: "9" }}>Why choose </Text>
            <span className="text-[var(--accent-9)] font-bold text-4xl md:text-7xl">
              QODEBYTE
            </span>
          </Flex>
          <Grid gap="5" columns={{ initial: "1", sm: "2" }}>
            {reasons.map((reason) => (
              <Box
                key={reason.heading}
                className="shadow-md shadow-gray-400/50 text-gray-900 rounded-sm p-4 w-full transition-transform duration-300 hover:-rotate-3"
              >
                <Text className="text-[var(--accent-9)]" size="6">
                  {reason.icon}
                </Text>
                <Heading my="3" size={{ initial: "5" }}>
                  {reason.heading}
                </Heading>
                <Text className="font-light">{reason.description}</Text>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default WhyUs;
