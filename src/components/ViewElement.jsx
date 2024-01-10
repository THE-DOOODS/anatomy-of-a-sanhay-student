import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import elements from "../data/group_of_elements.json";
import { useMediaQuery } from "../hooks/useMediaQuery";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const ViewElement = () => {
	const location = useLocation();
	const { name } = location.state;
	const isMobile = useMediaQuery("(max-width: 840px)");
	const [element, setElement] = useState({});

	console.log(name);

	const filterElement = (name) => {
		try {
			const element = elements.filter((element) => element.name === name);
			setElement(element[0]);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		filterElement(name);
	}, [name]);
	return (
		<div>
			{" "}
			{isMobile ? (
				<div className='p-4 font-main'>
					<div className='flex justify-between items-center w-full mb-10'>
						<div className='flex gap-4 items-center'>
							<Link to='/periodic'>
								<FaArrowLeftLong size={30} />
							</Link>
							<img
								src={logo}
								className='w-10'
							/>
						</div>
						<h1 className='text-primary text-xl font-bold'>{name}</h1>
					</div>
					<div className='mt-10 flex flex-col gap-4'>
						<div className='p-4 rounded-lg flex flex-col justify-center items-center border border-zinc-400'>
							<p className='text-left text-primary font-semibold'>{element?.number}</p>
							<h1 className='font-bold text-8xl'>{element?.symbol}</h1>
							<p className='text-3xl'>{element.name}</p>
							<p>Atomic mass: {element?.atomic_mass}</p>
							<p>Category: {element?.category}</p>
						</div>
						<img
							src={element?.spectral_img}
							alt={element?.name}
							className='w-full'
						/>
						{element?.spectral_img && <p className='text-center'>Spectral Image</p>}
						<h1 className='mt-4'>{element?.summary}</h1>
					</div>
				</div>
			) : (
				<div className=''></div>
			)}
		</div>
	);
};

export default ViewElement;
