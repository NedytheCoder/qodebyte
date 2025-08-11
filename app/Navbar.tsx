"use client";

import { Container } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { NavbarAnimation } from "./Animations";

const Navbar = () => {
  //I'm listening for my scroll event here
  const [scrollY, setScrollY] = useState(0);
  const [responsiveNav, setResponsiveNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup to avoid memory leaks
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //End of scroll event listening

  //NavLinks Array since we need them in more than one place
  const navLinks: { label: string; href: string }[] = [
    { label: "HOME", href: "/#hero" },
    { label: "ABOUT", href: "/#about" },
    { label: "COURSES", href: "/#courses" },
    { label: "WHY US", href: "/#whyus" },
    { label: "CONTACT", href: "/#contact" },
  ];

  return (
    <nav
      className={`${
        scrollY > 70
          ? "fixed bg-gray-950"
          : "absolute bg-transparent border-b-gray-500"
      } w-full top-0 py-5 px-5 z-2 text-white`}
    >
      <Container>
        <NavbarAnimation
          navLinks={navLinks}
          responsiveNav={responsiveNav}
          setResponsiveNav={setResponsiveNav}
        />
      </Container>
    </nav>
  );
};

export default Navbar;
