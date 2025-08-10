import About from "./About";
import Contact from "./Contact";
import Courses from "./courses/Courses";
import Hero from "./hero/Hero";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";
import WhyUs from "./whyus/WhyUs";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <WhyUs />
      <Testimonials />
      <Contact />
    </div>
  );
}
