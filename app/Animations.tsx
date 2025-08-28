"use client";

import { Flex, Heading, Button, Text, Grid, Box } from "@radix-ui/themes";
import Link from "next/link";
import { ReactElement, useEffect, useRef, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCode,
  FaLocationDot,
} from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image, { StaticImageData } from "next/image";
import peopleLearning from "@/public/imgs/pexels-fauxels-3184660.jpg";
import style from "./testimonial/Testimonial.module.css";
import { MdCall } from "react-icons/md";

const duration = 1;

//CONTENT ANIMATION FOR THE NAVBAR
export function NavbarAnimation({
  navLinks,
  responsiveNav,
  setResponsiveNav,
}: {
  navLinks: { label: string; href: string }[];
  responsiveNav: boolean;
  setResponsiveNav: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useEffect(() => {
    gsap.to("#onLoadNav", {
      y: 0,
      duration: duration,
    });
  }, []);

  return (
    <Flex
      justify="between"
      align="center"
      className="relative -translate-y-48"
      id="onLoadNav"
    >
      <Link href="#hero">
        <div className="text-[21px] md:text-[27px]">
          <span className="inline-flex items-center">
            Q<FaCode />B
          </span>
        </div>
      </Link>

      {/* Long ahh code for small hamburger button😅 */}
      <div className="block scale-50 sm:hidden">
        <label
          htmlFor="burger"
          className="relative w-10 h-7 cursor-pointer block select-none"
        >
          {/* Input for state checks */}
          <input
            type="checkbox"
            id="burger"
            className="hidden peer"
            checked={responsiveNav}
            onChange={() => setResponsiveNav(!responsiveNav)}
          />

          {/* Top bar */}
          <span className="block absolute h-1 w-full bg-white rounded-full left-0 top-0 origin-left transition-transform duration-300 ease-in-out peer-checked:rotate-42 peer-checked:translate-x-1.9"></span>

          {/* Middle bar */}
          <span className="block absolute h-1 w-full bg-white rounded-full left-0 top-1/2 -translate-y-1/2 origin-left transition-all duration-300 ease-in-out peer-checked:scale-x-0 peer-checked:opacity-0"></span>

          {/* Bottom bar */}
          <span className="block absolute h-1 w-full bg-white rounded-full left-0 bottom-0 origin-left transition-transform duration-300 ease-in-out peer-checked:-rotate-42 peer-checked:translate-x-1.2"></span>
        </label>
      </div>
      {/* End of hamburger button code */}

      {/* Nav links */}
      <div className="hidden sm:block">
        <Flex gap="5" align="center">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link href="#contact">
            <Button variant="soft" color="cyan" className="cursor-pointer">
              Get Started
            </Button>
          </Link>
          <Link href="#courses">
            <Button>View Courses</Button>
          </Link>
        </Flex>
      </div>
      {/* End of Nav links */}

      {/* Modified NavLinks for mobile screens */}
      <div
        className={`absolute bg-gray-900 w-full top-13 p-5 block sm:hidden transition-all duration-300 ease-in-out ${
          responsiveNav ? "right-0" : "right-[110%]"
        }`}
      >
        <Flex gap="5" align="center" direction="column">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link href="#contact">
            <Button variant="soft" color="cyan" className="cursor-pointer">
              Get Started
            </Button>
          </Link>
          <Link href="#courses">
            <Button>View Courses</Button>
          </Link>
        </Flex>
      </div>
      {/* End of Navlinks for mobile screens */}
    </Flex>
  );
}
//END OF NAVBAR CONTENT ANIMATION

//LANDING PAGE CONTENT ANIMATION
export function LandInAnimation() {
  useEffect(() => {
    gsap.to("#onLoad", { opacity: 1, y: 0, duration: duration });
  }, []);

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      className="z-1 text-center relative w-[90%] px-4 opacity-0 translate-y-48"
      gap="5"
      id="onLoad"
    >
      <div className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
        🚀 LIMITED TIME: 20% OFF ALL COURSES
      </div>
      
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
      
      <Text size={{ initial: "2", sm: "3", md: "4" }} className="max-w-2xl text-gray-200">
        Join 500+ students already learning. Master web development, AI, cybersecurity, and more with expert instructors and hands-on projects.
      </Text>
      
      <Flex gap="3" direction={{ initial: "column", sm: "row" }} className="w-full justify-center">
        <Link href="#courses" className="cursor-pointer">
          <Button size={{ initial: "3", sm: "4" }} className="bg-yellow-500 text-black hover:bg-yellow-400">
            Explore Courses <FaArrowRight size={10} />
          </Button>
        </Link>
        <Link href="#contact" className="cursor-pointer">
          <Button size={{ initial: "3", sm: "4" }} variant="outline" className="border-white text-white hover:bg-white hover:text-black">
            Free Consultation
          </Button>
        </Link>
      </Flex>
      
      <div className="flex items-center gap-6 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
          <span>4.9/5 Rating</span>
        </div>
        <div className="flex items-center gap-2">
          <span>👨‍💻</span>
          <span>Expert Instructors</span>
        </div>
        <div className="flex items-center gap-2">
          <span>💼</span>
          <span>Job Ready Skills</span>
        </div>
      </div>
    </Flex>
  );
}
//END OF LANDING PAGE CONTENT ANIMATION

//ABOUT PAGE ANIMATION
export function AboutPageAnimation() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#about", {
      opacity: 0,
      y: 50,
      duration: duration,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top 75%", // starts when top of grid hits 80% of viewport
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <Grid
      columns={{ initial: "1", md: "2" }}
      gap={{ initial: "6", md: "8" }}
      id="about"
    >
      <Image src={peopleLearning} alt="An image of people learning stuff" />
      <Flex justify="center" direction="column" gap={{ initial: "3", md: "5" }}>
        <Text as="p" weight="light" size={{ initial: "3", md: "5" }}>
          ABOUT US
        </Text>
        <Heading as="h2" size={{ initial: "6", md: "8" }}>
          ABOUT QODEBYTE TECH ACADEMY?
        </Heading>
        <Text
          as="p"
          className="text-justify"
          size={{ initial: "2", md: "4" }}
          color="gray"
        >
          Qodebyte is a modern tech academy dedicated to equipping learners with
          the skills needed to thrive in today’s digital world. Covering
          everything from web and mobile development to UI/UX design, data
          science, cybersecurity, and emerging technologies, Qodebyte offers a
          comprehensive, hands-on learning experience. With expert instructors,
          real-world projects, and an emphasis on both technical mastery and
          creative problem-solving, Qodebyte empowers students of all levels,
          whether beginners or professionals, to build, innovate, and excel in
          the ever-evolving tech landscape.
        </Text>
        <Button style={{ padding: "1.5rem", width: "9rem" }}>Learn More</Button>
      </Flex>
    </Grid>
  );
}
//END OF ABOUT PAGE ANIMATION

//COURSES PAGE ANIMATION
export function CourseTitle() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#heading", {
      opacity: 0,
      y: 50,
      duration: duration,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#heading",
        start: "top: 70%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <Flex
      direction="column"
      className="mb-5"
      align={{ initial: "center", md: "start" }}
      gap="4"
      mb="7"
      id="heading"
    >
      <Heading as="h2" size={{ initial: "7", md: "9" }}>
        OUR COURSES
      </Heading>
      <Text size={{ initial: "4", md: "7" }} weight="light">
        TOP PICKS
      </Text>
    </Flex>
  );
}
//END OF COURSES PAGE ANIMATION

//COURSES PAGE ANIMATION
export function CourseCards({
  courses,
}: {
  courses: {
    label: string;
    href: string;
    description: string;
    image: StaticImageData;
    rating: number;
    duration: string;
    price: string;
    level: string;
    students: number;
  }[];
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#card", {
      opacity: 0,
      y: 50,
      duration: duration,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#card",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <Grid gap="6" columns={{ initial: "1", sm: "2", md: "3" }}>
      {courses.map((course) => (
        <Box
          key={course.label}
          className="group h-auto bg-white text-gray-900 !flex justify-center flex-col gap-4 !rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          id="card"
        >
          <div className="w-full h-48 overflow-hidden rounded-lg relative">
            <Image
              src={course.image}
              alt={course.label}
              fill
              className="object-cover transition-transform group-hover:scale-110"
              priority
            />
            <div className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
              {course.level}
            </div>
            <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
              {course.duration}
            </div>
          </div>
          
          <div className="flex justify-between items-start">
            <Heading as="h3" size="4" className="flex-1">{course.label}</Heading>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{course.price}</div>
              <div className="text-sm text-gray-500">USD</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">⭐</span>
              <span>{course.rating}/5</span>
            </div>
            <div className="flex items-center gap-1">
              <span>👥</span>
              <span>{course.students} students</span>
            </div>
          </div>
          
          <Text
            as="p"
            className="text-justify text-gray-600"
            size={{ initial: "2", md: "3" }}
          >
            {course.description}
          </Text>
          
          <Link href={course.href}>
            <Button className="!w-full !p-3 bg-blue-600 hover:bg-blue-700">
              Enroll Now
            </Button>
          </Link>
        </Box>
      ))}
      <Link
        href="/courses"
        className="group h-auto bg-gradient-to-br from-blue-600 to-purple-600 text-white flex justify-center items-center gap-5 transition-all duration-300 hover:from-blue-700 hover:to-purple-700 flex-col p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2"
        id="card"
      >
        <div className="text-center">
          <Text size="6" className="font-bold mb-2">
            View All Courses
          </Text>
          <Text size="3" className="opacity-90">
            Discover our complete curriculum with 20+ courses
          </Text>
        </div>

        <span className="w-12 h-12 rounded-full bg-white text-blue-600 flex justify-center items-center transition-all duration-300 group-hover:scale-110">
          <FaArrowRight />
        </span>
      </Link>
    </Grid>
  );
}
//END OF COURSES PAGE ANIMATION

//WHY US ANIMATION
export function WhyUsAnimation({
  reasons,
}: {
  reasons: {
    icon: ReactElement;
    heading: string;
    description: string;
  }[];
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#why", {
      opacity: 0,
      gap: 200,
      duration: duration,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#why",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <Grid
      columns={{ initial: "1", sm: "1", md: "30% 70%" }}
      align="center"
      justify="center"
      gap={{ initial: "3", sm: "0" }}
      id="why"
    >
      <Flex
        className="text-gray-900"
        direction="column"
        gap={{ initial: "3" }}
        align={{ initial: "center", md: "start" }}
      >
        <Text size={{ initial: "6", md: "9" }}>WHY CHOOSE</Text>
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
  );
}
//END OF WHY US ANIMATION

//TESTIMONIAL ANIMATION
export function TestimonialAnimation({
  testimonials,
}: {
  testimonials: { name: string; role: string; text: string; image: string }[];
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#testimonialHeading", {
      y: 50,
      opacity: 0,
      ease: "power3.out",
      duration: duration,
      scrollTrigger: {
        trigger: "#testimonialHeading",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from("#content", {
      y: 50,
      opacity: 0,
      ease: "power3.out",
      duration: duration,
      scrollTrigger: {
        trigger: "#content",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right", distance = 300) => {
    if (!carouselRef.current) return;
    const left = direction === "left" ? -distance : distance;
    const opts: ScrollToOptions = { left, behavior: "smooth" };
    carouselRef.current.scrollBy(opts);
  };
  return (
    <>
      <Flex direction="column" className="text-center" id="testimonialHeading">
        <Text size="5">OUR STUDENTS SAY</Text>
        <span className="text-[var(--accent-6)] font-bold text-4xl md:text-7xl">
          TESTIMONIALS
        </span>
      </Flex>

      <div className="relative w-full max-w-7xl mx-auto px-4" id="content">
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
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full object-cover"
                  width={50}
                  height={5}
                  unoptimized
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
    </>
  );
}
//END OF TESTIMONIAL ANIMATION

//CONTACT ANIMATION
export function ContactAnimation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#contactInfo", {
      opacity: 0,
      gap: 200,
      duration: duration,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#contactInfo",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <Grid columns={{ md: "2" }} gap="5" id="contactInfo">
      <Grid gap="5" className="order-2 lg:order-1">
        <Flex
          className="shadow-md bg-white p-8 lg:p-0"
          justify="center"
          align="center"
          direction="column"
          gap="5"
        >
          <FaLocationDot size={75} className="text-[var(--accent-9)]" />
          <Text size={{ initial: "4", md: "7" }} className="text-gray-700">
            27 Rue des Tisserands, 75011 Paris, France
          </Text>
        </Flex>
        <Flex
          className="shadow-md bg-white p-8 lg:p-0"
          justify="center"
          align="center"
          direction="column"
          gap="3"
        >
          <MdCall size={75} className="text-[var(--accent-9)]" />
          <Text size={{ initial: "5", md: "7" }} className="text-gray-700">
            contact@qodebyte.com
          </Text>
          <Text size={{ initial: "5", md: "7" }} className="text-gray-700">
            +33-1-XX-XX-XX-XX
          </Text>
        </Flex>
      </Grid>
      <div className="bg-white shadow-md order-1 lg:order-2">
        <Heading className="bg-gray-900 text-white p-5">
          CONNECT WITH US
        </Heading>
        <form onSubmit={handleSubmit} className="space-y-5 p-5">
          {submitStatus === 'success' && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              Something went wrong. Please try again.
            </div>
          )}
          
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="LASTNAME FIRSTNAME"
          />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="EMAIL"
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="PHONE NUMBER"
          />
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="SUBJECT"
          />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full h-48 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="MESSAGE"
          />
          <Button 
            type="submit" 
            className="!text-xl !p-5 w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </Button>
        </form>
      </div>
    </Grid>
  );
}
//END OF CONTACT ANIMATION
