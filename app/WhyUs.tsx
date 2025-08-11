import { Container } from "@radix-ui/themes";
import { SiCodementor } from "react-icons/si";
import { FaBook } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { WhyUsAnimation } from "./Animations";
import { ReactElement } from "react";

const WhyUs = () => {
  const reasons: {
    icon: ReactElement;
    heading: string;
    description: string;
  }[] = [
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
    <div className="w-full py-28" id="whyus">
      <Container width={{ initial: "85%" }}>
        <WhyUsAnimation reasons={reasons} />
      </Container>
    </div>
  );
};

export default WhyUs;
