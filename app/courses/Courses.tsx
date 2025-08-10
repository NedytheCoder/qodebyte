import {
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
} from "@radix-ui/themes";
import style from "./Courses.module.css";
import Image from "next/image";
import python from "@/public/python.jpg";
import AI from "@/public/AI.jpg";
import HTML from "@/public/HTML.jpg";
import C from "@/public/c.jpg";
import ethical from "@/public/ethical.jpg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const courses = [
  {
    label: "HTML/CSS – Your First Step Into the Web",
    href: "/courses/html-css",
    description:
      "Build the foundation of every website. With HTML and CSS, you’ll go from blank screens to beautiful, structured web pages in no time.",
    image: HTML,
    rating: 4.5,
    price: 399.99,
    newPrice: 249.99,
  },
  {
    label: "C Programming – Speak Machine",
    href: "/courses/c-programming",
    description:
      "Master the legendary language that powers operating systems, game engines, and more. If you can code in C, you can code in anything.",
    image: C,
    rating: 4.5,
    price: 399.99,
    newPrice: 249.99,
  },
  {
    label: "AI – Teach Machines to Think",
    href: "/courses/ai",
    description:
      "From chatbots to self-driving cars, AI is rewriting the future. Learn how to design, train, and unleash intelligent systems.",
    image: AI,
    rating: 4.5,
    price: 399.99,
    newPrice: 249.99,
  },
  {
    label: "Python – The Swiss Army Knife of Code",
    href: "/courses/python",
    description:
      "Fast, versatile, and beginner-friendly. Python takes you from simple scripts to data science and AI without breaking a sweat.",
    image: python,
    rating: 4.5,
    price: 399.99,
    newPrice: 249.99,
  },
  {
    label: "Ethical Hacking – Hack to Protect",
    href: "/courses/ethical-hacking",
    description:
      "Think like an attacker, act like a guardian. Learn to expose vulnerabilities before the bad guys do.",
    image: ethical,
    rating: 4.5,
    price: 399.99,
    newPrice: 249.99,
  },
];

const Courses = () => {
  return (
    <div
      className={`${style.main} w-full min-h-screen text-white bg-gray-900 pt-20 p-5`}
    >
      <Container width={{ initial: "85%" }}>
        <Flex
          direction="column"
          className="mb-5"
          align={{ initial: "center", md: "start" }}
          gap="4"
          mb="7"
        >
          <Heading as="h2" size={{ initial: "7", md: "9" }}>
            Our Courses
          </Heading>
          <Text size={{ initial: "4", md: "7" }} weight="light">
            Top picks
          </Text>
        </Flex>
      </Container>
      <Grid gap="4" columns={{ initial: "1", sm: "2", md: "3" }}>
        {courses.map((course) => (
          <Card
            key={course.label}
            className="group h-[40rem] bg-white text-gray-900 !flex justify-center flex-col gap-5 !rounded-none"
          >
            <div className="w-full h-72 overflow-hidden rounded-lg relative p-1">
              <Image
                src={course.image}
                alt={course.label}
                fill
                className="object-cover transition-transform group-hover:scale-125"
              />
            </div>
            <Heading as="h3">{course.label}</Heading>
            <div className="rating">{course.rating}/5</div>
            <Text
              as="p"
              className="text-justify"
              size={{ initial: "3", md: "4" }}
            >
              {course.description}
            </Text>
            <Link href={course.href}>
              <Button className="!w-32 !p-5">Check it out!</Button>
            </Link>
          </Card>
        ))}
        <Link
          href="/courses"
          className="group h-[40rem] bg-transparent border border-white text-white flex justify-center items-center gap-5 transition-colors duration-300 hover:bg-white hover:text-gray-900"
        >
          <Text size="5" className="transition-colors duration-300">
            View other courses that`&apos;`ll interest you
          </Text>

          <span className="w-12 h-12 rounded-full bg-white text-gray-900 flex justify-center items-center transition-colors duration-300 group-hover:bg-gray-900 group-hover:text-white">
            <FaArrowRight />
          </span>
        </Link>
      </Grid>
    </div>
  );
};

export default Courses;
