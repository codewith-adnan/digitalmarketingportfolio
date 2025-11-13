import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/handsome.jpg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p>
Hey! I’m a digital marketer who’s all about building brands and turning clicks into real connections. From running ad campaigns to crafting content that sticks, I love helping businesses grow online the smart way.                           </p>
                        <br />
                        <p>
Over time, I’ve worked on social media strategies, SEO, Google and Meta ads, content planning, and email marketing. I mix creativity with data to get results that matter.

Right now, I’m open to remote digital marketing roles freelance, part time, or full time. If you’re looking for someone who’s motivated, reliable, and brings fresh ideas to the table, let’s chat!                         </p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
