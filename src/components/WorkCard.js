import React from "react";
import { FiFolder } from "react-icons/fi";
import {
	FaInstagram,
	FaFacebookSquare,
	FaPinterest,
	FaBlogger,
} from "react-icons/fa";
// No need to import Link from 'react-router-dom' if only using 'a' tags for external links
// import { Link } from "react-router-dom"; // You can remove this line

const WorkCard = ({ w, tabId }) => {
	return (
		<div>
			{/* For all tabs, we will now use an <a> tag for the main card link */}
			<a
				href={tabId === "pinterest" ? w.app : w.site} // Use w.app for pinterest, w.site for others
				target='_blank'
				rel='noreferrer'
				className='work-link-group'>
				<div className='works-card'>
					<div className='works-container'>
						<div className='top-work'>
							<FiFolder className='work-folder' />
							<div className='right'>
								{w.socialLink && (
									// Social media icon link (also an <a> tag)
									<a
										className='work-git'
										href={w.socialLink} // Use href for external links
										target='_blank'
										rel='noreferrer'>
										{tabId === "instagram" && <FaInstagram />}
										{tabId === "facebook" && <FaFacebookSquare />}
										{tabId === "pinterest" && <FaPinterest />}
									</a>
								)}
								{/* Blog icon link (always an <a> tag) */}
								<a
									href='https://onlinegameandssoftware.blogspot.com'
									target='_blank'
									rel='noreferrer'
									className='work-link'>
									<FaBlogger />
								</a>
							</div>
						</div>
						<div className='mid-work'>
							<p className='work-title'>{w.title}</p>
							<p className='work-desc'>{w.desc}</p>
						</div>
						<div className='bottom-work'>
							{w.tech.map((e, index) => {
								return <small key={index}>{e}</small>;
							})}
						</div>
					</div>
				</div>
			</a>
		</div>
	);
};

export default WorkCard;