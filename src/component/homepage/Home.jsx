import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesPage from './components/ServicesPage'
import WorkExperience from './components/WorkExperience'
import MainText from './components/MainText'
import ClientSays from './components/ClientSays'




const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesPage />
      <WorkExperience />
      <MainText />
      <ClientSays />
    </div>
  )
}

export default Home
