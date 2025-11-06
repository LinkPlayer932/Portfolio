import React from 'react'
import Aboutme from './components/Aboutme'
import Testimonial from './components/Testimonial'
import NewsLatter from './components/NewsLatter'

const About = () => {
  return (
    <div className='pt-24'>
      <Aboutme />
      <Testimonial />
      <NewsLatter />
    </div>
  )
}

export default About
