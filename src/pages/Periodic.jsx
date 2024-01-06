import React from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "../assets/logo.png";

const Periodic = () => {
	const isMobile = useMediaQuery("(max-width: 840px)");
	return (
		<div>
			{isMobile ? (
				<div className='p-4'>
					<div className='flex justify-between items-center w-full mb-10'>
						<div className='flex gap-4 items-center'>
							<Link to='/anatomy'>
								<FaArrowLeftLong size={30} />
							</Link>
							<img
								src={logo}
								className='w-10'
							/>
						</div>
						<h1 className='text-primary text-xl font-bold'>
							Periodic Table of Elements
						</h1>
					</div>
				</div>
			) : (
				<div className=''></div>
			)}
		</div>
	);
};

export default Periodic;
