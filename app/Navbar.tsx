"use client";

import { Button, Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { useEffect, useState } from "react";

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
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "SERVICE", href: "/service" },
    { label: "CONTACT", href: "/contact" },
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
        <Flex justify="between" align="center" className="relative">
          <Link href="">
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
              <Link href="#!">
                <Button variant="soft" color="cyan" className="cursor-pointer">
                  Login
                </Button>
              </Link>
              <Link href="#!">
                <Button>Sign Up</Button>
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
              <Link href="#!">
                <Button variant="soft" color="cyan" className="cursor-pointer">
                  Login
                </Button>
              </Link>
              <Link href="#!">
                <Button>Sign Up</Button>
              </Link>
            </Flex>
          </div>
          {/* End of Navlinks for mobile screens */}
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
