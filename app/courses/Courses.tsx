"use client";

import style from "./Courses.module.css";
import { StaticImageData } from "next/image";
import python from "@/public/imgs/python.jpg";
import AI from "@/public/imgs/AI.jpg";
import HTML from "@/public/imgs/HTML.jpg";
import C from "@/public/imgs/c.jpg";
import ethical from "@/public/imgs/ethical.jpg";
import { CourseCards, CourseTitle } from "../Animations";
import { Container, Flex, Text, Button, Box } from "@radix-ui/themes";
import { useState, useMemo } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const courses: {
  label: string;
  href: string;
  description: string;
  image: StaticImageData;
  rating: number;
  duration: string;
  price: string;
  level: string;
  students: number;
  category: string;
}[] = [
  {
    label: "HTML/CSS – Your First Step Into the Web",
    href: "/courses/html-css",
    description:
      "Build the foundation of every website. Learn HTML5, CSS3, responsive design, and modern web development practices. Perfect for beginners starting their web development journey.",
    image: HTML,
    rating: 4.8,
    duration: "8 weeks",
    price: "$299",
    level: "Beginner",
    students: 1247,
    category: "Web Development",
  },
  {
    label: "C Programming – Speak Machine",
    href: "/courses/c-programming",
    description:
      "Master the legendary language that powers operating systems, game engines, and embedded systems. Learn memory management, pointers, and low-level programming concepts.",
    image: C,
    rating: 4.7,
    duration: "12 weeks",
    price: "$399",
    level: "Intermediate",
    students: 892,
    category: "Programming",
  },
  {
    label: "AI – Teach Machines to Think",
    href: "/courses/ai",
    description:
      "From chatbots to self-driving cars, AI is rewriting the future. Learn machine learning, neural networks, and how to build intelligent systems that solve real-world problems.",
    image: AI,
    rating: 4.9,
    duration: "16 weeks",
    price: "$599",
    level: "Advanced",
    students: 567,
    category: "AI & ML",
  },
  {
    label: "Python – The Swiss Army Knife of Code",
    href: "/courses/python",
    description:
      "Fast, versatile, and beginner-friendly. Python takes you from simple scripts to data science, web development, and AI. Build real projects and automate your workflow.",
    image: python,
    rating: 4.8,
    duration: "10 weeks",
    price: "$349",
    level: "Beginner",
    students: 2156,
    category: "Programming",
  },
  {
    label: "Ethical Hacking – Hack to Protect",
    href: "/courses/ethical-hacking",
    description:
      "Think like an attacker, act like a guardian. Learn penetration testing, vulnerability assessment, and cybersecurity best practices to protect systems and networks.",
    image: ethical,
    rating: 4.6,
    duration: "14 weeks",
    price: "$499",
    level: "Intermediate",
    students: 734,
    category: "Cybersecurity",
  },
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");

  const filteredCourses = useMemo(() => {
    let filtered = courses.filter((course) => {
      const matchesSearch =
        course.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLevel =
        selectedLevel === "all" || course.level === selectedLevel;
      const matchesCategory =
        selectedCategory === "all" || course.category === selectedCategory;

      return matchesSearch && matchesLevel && matchesCategory;
    });

    // Sort courses
    switch (sortBy) {
      case "price-low":
        filtered.sort(
          (a, b) =>
            parseInt(a.price.replace("$", "")) -
            parseInt(b.price.replace("$", ""))
        );
        break;
      case "price-high":
        filtered.sort(
          (a, b) =>
            parseInt(b.price.replace("$", "")) -
            parseInt(a.price.replace("$", ""))
        );
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "students":
        filtered.sort((a, b) => b.students - a.students);
        break;
      default: // popularity (students)
        filtered.sort((a, b) => b.students - a.students);
    }

    return filtered;
  }, [searchTerm, selectedLevel, selectedCategory, sortBy]);

  const levels = ["all", "Beginner", "Intermediate", "Advanced"];
  const categories = [
    "all",
    "Web Development",
    "Programming",
    "AI & ML",
    "Cybersecurity",
  ];

  return (
    <div
      className={`${style.main} w-full min-h-screen text-white bg-gray-900 p-5 py-32`}
      id="courses"
    >
      <Container width={{ initial: "85%" }}>
        <CourseTitle />

        {/* Search and Filter Section */}
        <Box className="mb-8 p-6 bg-gray-800 rounded-lg">
          <Flex direction="column" gap="4">
            {/* Search Bar */}
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filters */}
            <Flex
              gap="4"
              wrap="wrap"
              className="justify-center md:justify-start"
            >
              {/* Level Filter */}
              <div className="flex items-center gap-2">
                <FaFilter className="text-gray-400" />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level === "all" ? "All Levels" : level}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <FaFilter className="text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div className="flex items-center gap-2">
                <FaFilter className="text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="students">Most Students</option>
                </select>
              </div>
            </Flex>

            {/* Results Count */}
            <Text size="3" className="text-center md:text-left text-gray-300">
              Showing {filteredCourses.length} of {courses.length} courses
            </Text>
          </Flex>
        </Box>

        {/* Course Cards */}
        {filteredCourses.length > 0 ? (
          <CourseCards courses={filteredCourses} />
        ) : (
          <Box className="text-center py-16">
            <Text size="6" className="text-gray-400 mb-4">
              No courses found
            </Text>
            <Text size="3" className="text-gray-500 mb-6">
              Try adjusting your search criteria or filters
            </Text>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedLevel("all");
                setSelectedCategory("all");
                setSortBy("popularity");
              }}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Clear All Filters
            </Button>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default Courses;
