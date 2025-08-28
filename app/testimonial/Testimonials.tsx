import { Container } from "@radix-ui/themes";
import { TestimonialAnimation } from "../Animations";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Frontend Developer at Google",
    text: "Qodebyte Academy transformed my career. The hands-on projects and expert instructors gave me the skills I needed to land my dream job at Google. The community support was incredible!",
    image: "/imgs/pexels-fauxels-3184660.jpg"
  },
  {
    name: "Michael Chen",
    role: "AI Engineer at Tesla",
    text: "I came to Qodebyte with zero programming experience. Now I'm building AI systems at Tesla! The curriculum is perfectly structured for beginners to advanced learners.",
    image: "/imgs/pexels-fauxels-3182774.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "Cybersecurity Specialist",
    text: "The ethical hacking course was mind-blowing. Real-world scenarios, hands-on labs, and industry experts made learning complex security concepts actually fun and engaging.",
    image: "/imgs/pexels-kindelmedia-6774432.jpg"
  },
  {
    name: "David Kim",
    role: "Full-Stack Developer",
    text: "Qodebyte's project-based approach helped me build a portfolio that impressed every employer. I went from knowing nothing to building full applications in just 6 months.",
    image: "/imgs/pexels-fauxels-3184660.jpg"
  },
  {
    name: "Lisa Thompson",
    role: "Data Scientist",
    text: "The Python course was exceptional. I learned not just the language, but how to think like a programmer. The data science projects were exactly what I needed for my career transition.",
    image: "/imgs/pexels-fauxels-3182774.jpg"
  },
  {
    name: "James Wilson",
    role: "Software Architect",
    text: "As an experienced developer, I was skeptical about online courses. But Qodebyte's advanced topics and real-world applications exceeded my expectations. Highly recommended!",
    image: "/imgs/pexels-kindelmedia-6774432.jpg"
  }
];

const Testimonials = () => {
  return (
    <div className="w-full min-h-screen bg-white py-32" id="testimonials">
      <Container width={{ initial: "85%" }}>
        <TestimonialAnimation testimonials={testimonials} />
      </Container>
    </div>
  );
};

export default Testimonials;
