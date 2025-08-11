import style from "./Courses.module.css";
import { StaticImageData } from "next/image";
import python from "@/public/python.jpg";
import AI from "@/public/AI.jpg";
import HTML from "@/public/HTML.jpg";
import C from "@/public/c.jpg";
import ethical from "@/public/ethical.jpg";
import { CourseCards, CourseTitle } from "../Animations";
import { Container } from "@radix-ui/themes";

const courses: {
  label: string;
  href: string;
  description: string;
  image: StaticImageData;
  rating: number;
}[] = [
  {
    label: "HTML/CSS – Your First Step Into the Web",
    href: "/courses/html-css",
    description:
      "Build the foundation of every website. With HTML and CSS, you’ll go from blank screens to beautiful, structured web pages in no time.",
    image: HTML,
    rating: 4.5,
  },
  {
    label: "C Programming – Speak Machine",
    href: "/courses/c-programming",
    description:
      "Master the legendary language that powers operating systems, game engines, and more. If you can code in C, you can code in anything.",
    image: C,
    rating: 4.5,
  },
  {
    label: "AI – Teach Machines to Think",
    href: "/courses/ai",
    description:
      "From chatbots to self-driving cars, AI is rewriting the future. Learn how to design, train, and unleash intelligent systems.",
    image: AI,
    rating: 4.5,
  },
  {
    label: "Python – The Swiss Army Knife of Code",
    href: "/courses/python",
    description:
      "Fast, versatile, and beginner-friendly. Python takes you from simple scripts to data science and AI without breaking a sweat.",
    image: python,
    rating: 4.5,
  },
  {
    label: "Ethical Hacking – Hack to Protect",
    href: "/courses/ethical-hacking",
    description:
      "Think like an attacker, act like a guardian. Learn to expose vulnerabilities before the bad guys do.",
    image: ethical,
    rating: 4.5,
  },
];

const Courses = () => {
  return (
    <div
      className={`${style.main} w-full min-h-screen text-white bg-gray-900 p-5 py-32`}
      id="courses"
    >
      <Container width={{ initial: "85%" }}>
        <CourseTitle />
      </Container>
      <CourseCards courses={courses} />
    </div>
  );
};

export default Courses;
