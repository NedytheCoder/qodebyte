import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import style from "./Hero.module.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className={`${style.main} w-full h-screen flex justify-center items-center text-white relative`}
    >
      <Flex
        direction="column"
        justify="center"
        align="center"
        className="z-1 text-center relative w-[90%] px-4"
        gap="5"
      >
        <Text weight="light" size={{ initial: "3", sm: "4", md: "5" }}>
          THE PATH OF EXCELLENCE
        </Text>
        <Heading
          as="h1"
          size={{ initial: "6", sm: "7", md: "9" }}
          className="sm:!leading-loose md:!leading-tight"
        >
          UNLOCK YOUR SOFTWARE POTENTIAL WITH QODEBYTE ACADEMY
        </Heading>
        <Link href="" className="cursor-pointer">
          <Button size={{ initial: "3", sm: "4" }}>
            Enroll Now <FaArrowRight size={10} />
          </Button>
        </Link>
      </Flex>
    </div>
  );
};

export default Hero;
