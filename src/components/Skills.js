import React from "react";
import "../styles/Skills.css";
import { motion } from "framer-motion";

import centralSkillLogo from '../images/Capture 124.PNG'; 

const Skills = () => {
	const skillEffect = {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1.4,
		},
	};


	return (
		<>
			<div className='skills' id='skills'>
				<div className='container'>
					<motion.div
						whileInView={skillEffect}
						initial={{ y: "-80px", opacity: 0 }}
						className='heading'>
						<p className='heading-sub-text'>What I work with</p>
						<p className='heading-text'>My Skills</p>
					</motion.div>
					<motion.div
						whileInView={skillEffect}
						className='central-skill-box' 
						initial={{ y: "-80px", opacity: 0 }}>
						<div className='central-skill-card'>
							<div className='central-skill-icon'>
								<img src={centralSkillLogo} alt="Digital Marketing Logo" /> 
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Skills;