import { TestimonialAnimation } from "../Animations";
import style from "./Testimonial.module.css";

const Testimonials = () => {
  const testimonials: {
    name: string;
    role: string;
    text: string;
    image: string;
  }[] = [
    {
      name: "Jane Doe",
      role: "CEO, BrightTech",
      text: "This service exceeded my expectations. Highly recommend to anyone who values quality.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Michael Smith",
      role: "Software Engineer",
      text: "Absolutely fantastic experience from start to finish. I'll definitely be back.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Sophia Lee",
      role: "Marketing Manager",
      text: "The team was professional, attentive, and went above and beyond to help us succeed.",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: "David Johnson",
      role: "Entrepreneur",
      text: "Five stars all the way. Couldn't have asked for a better experience.",
      image: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      name: "Emma Roberts",
      role: "Creative Director, PixelCraft",
      text: "From start to finish, the process was seamless. They understood my vision and brought it to life beautifully.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Liam Anderson",
      role: "Product Manager, InnovateX",
      text: "The attention to detail and dedication to quality blew me away. Easily one of the best experiences I've had working with a team.",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
    },
  ];

  return (
    <div
      className={`${style.main} relative w-full h-screen flex flex-col text-white z-1 items-center justify-center`}
    >
      <TestimonialAnimation testimonials={testimonials} />
    </div>
  );
};

export default Testimonials;
