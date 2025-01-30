import React from 'react'
import Hero from '../layout/Hero'
import About from '../layout/About'
import CollegeActivities from '../layout/CollegeActivities'
import WelcomeScreen from '../layout/WelcomeScreen'
import Footer from '../layout/Footer'
import Navbar2 from './Navbar2'
import Advantage from '../layout/Advantage'
import Rankings from '../layout/Rankings'
import Notification from '../layout/Notification'
import Placements from '../layout/Placements'
import ImageGallery from '../layout/ImageGallery'
import Footer2 from '../layout/Footer2'
import Collaboration from '../layout/Collaboration'
import Footer3 from '../layout/Footer3'
import Chatbot from '../layout/Chatbot'
import Blog from '../layout/Blog'
import Options from '../layout/Options'

const HomeScreen = () => {
  return (
    <div className='overflow-x-hidden scroll-smooth'>
      <Hero />
      <Chatbot />
      <Notification />
      <Advantage />
      <Rankings />
      <Placements />
      <Options />
      <ImageGallery />
      <Blog />
      <Collaboration />
      {/* <About /> */}
      <CollegeActivities />
      <WelcomeScreen />
      {/* <Footer /> */}
      <Footer2 />
      <Footer3 />
    </div>
  )
}

export default HomeScreen
