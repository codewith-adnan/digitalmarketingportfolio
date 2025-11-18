import React from 'react';
import "../styles/Services.css"
import { motion } from "framer-motion";

import { FaGoogle, FaSearch } from "react-icons/fa"; // Assuming these are from react-icons/fa

const Services = () => {

   const myServices = [
    
    
    {
        name: "Google Ads",
        icon: <FaGoogle />,
        description: "Developing and managing highly effective Google Ads campaigns to drive targeted traffic and maximize ROI. From keyword research to ad copy and bid management, I optimize for conversions."
    },
    {
        name: "SEO",
        icon: <FaSearch />,
        description: "Improving organic search engine rankings to increase visibility and attract more qualified leads. I implement on-page, off-page, and technical SEO strategies to boost your online presence."
    }
   ];

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">What I can do</p>
                    <p className='heading-text'>Services</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    {myServices.map((service, index) => (
                        <div className="services-card" key={index}> {/* Added key for list rendering */}
                            {service.icon && React.cloneElement(service.icon, { className: 'services-icon' })} {/* Render icon and add class */}
                            <p className='services-title'>{service.name}</p>
                            <p className='services-desc'>{service.description}</p>
                        </div>
                    ))}
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;