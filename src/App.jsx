import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
