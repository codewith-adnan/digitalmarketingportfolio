import React from "react";
import { FiFolder } from "react-icons/fi";
import {
	FaInstagram,
	FaFacebookSquare,
	FaPinterest,
	FaBlogger,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const WorkCard = ({ w, tabId }) => {
	return (
		<div>
			{tabId === "pinterest" ? (
				<a
					href={w.app}
					download={w.title}
					target='_blank'
					rel='noreferrer'
					className='work-link-group'>
					<div className='works-card'>
						<div className='works-container'>
							<div className='top-work'>
								<FiFolder className='work-folder' />
								<div className='right'>
									{w.socialLink && (
										<Link
											className='work-git'
											to={w.socialLink}
											target='_blank'>
											<FaPinterest />
										</Link>
									)}

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
			) : (
				<Link to={w.site} target='_blank' className='work-link-group'>
					<div className='works-card'>
						<div className='works-container'>
							<div className='top-work'>
								<FiFolder className='work-folder' />
								<div className='right'>
									{w.socialLink && (
										<Link
											className='work-git'
											to={w.socialLink}
											target='_blank'>
											{tabId === "instagram" && <FaInstagram />}
											{tabId === "facebook" && <FaFacebookSquare />}
										</Link>
									)}
									<Link
										className='work-link'
										to='https://onlinegameandssoftware.blogspot.com'
										target='_blank'>
										<FaBlogger />
									</Link>
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
				</Link>
			)}
		</div>
	);
};

export default WorkCard;