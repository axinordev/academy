import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import FeaturedCourses from './components/FeaturedCourses'
import Choose from './components/Choose'
import Testimonials from './components/Testimonials'
import ContactSection from './components/ContactSection'
import Mentors from './components/Mentors'
import CoursesPage from './components/CoursePage'
import MernCourse from './components/MernCourse'

const App = () => {
  return (
    <div>
      <Navbar/>      
      <HeroSection/>
      <FeaturedCourses/>
      <Choose/>
      <About/>
      <Testimonials/>
      <Mentors/>
      <ContactSection/>
      
    </div>
  )
}

export default App
