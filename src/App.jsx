import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import FeaturedCourses from "./components/FeaturedCourses";
import Choose from "./components/Choose";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Mentors from "./components/Mentors";
import CoursesPage from "./components/CoursePage";
import ContactPage from "./components/ContactPage";
import MernCourse from "./components/MernCourse"; // ✅ Import your MERN Course Page

// Home Page (combining multiple sections)
const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <FeaturedCourses />
      <Choose />
      <Testimonials />
      <Mentors />
      <ContactSection />
    </>
  );
};

// App Component
const App = () => {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/mern-course" element={<MernCourse />} /> {/* ✅ Added */}
      </Routes>
    </Router>
  );
};

export default App;
