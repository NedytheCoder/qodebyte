import About from "./About";
import Courses from "./courses/Courses";
import Hero from "./hero/Hero";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Testimonials />
    </div>
  );
}
