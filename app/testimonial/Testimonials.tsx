"use client";

import { Heading, Text } from "@radix-ui/themes";
import style from "./Testimonial.module.css";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
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

  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right", distance = 300) => {
    if (!carouselRef.current) return;
    const left = direction === "left" ? -distance : distance;
    const opts: ScrollToOptions = { left, behavior: "smooth" };
    carouselRef.current.scrollBy(opts);
  };
  return (
    <div
      className={`${style.main} relative w-full h-screen flex flex-col text-white z-1 items-center justify-center`}
    >
      <Text size="5">OUR STUDENTS SAY</Text>
      <span className="text-[var(--accent-6)] font-bold text-4xl md:text-7xl">
        TESTIMONIALS
      </span>

      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* Scrollable Container */}
        <div
          ref={carouselRef}
          className={`${style.carousel} flex overflow-x-auto no-scrollbar scroll-smooth space-x-4 py-6`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white rounded-sm shadow-lg p-6 flex flex-col justify-center flex-shrink-0 
                       w-64 h-70 sm:w-72 md:w-80 lg:w-96"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-300">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute -left-0 top-1/2 -translate-y-1/2 bg-white text-gray-900
                   p-2 rounded-full transition-colors hover:bg-gray-900 hover:text-white shadow-lg"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute -right-0 top-1/2 -translate-y-1/2 bg-white text-gray-900 
                   p-2 rounded-full transition-colors hover:bg-gray-900 hover:text-white shadow-lg"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
