import { useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "../assets/logo.png";
import flower from "../assets/flower.jpg";
import PartOfAPlant from "../components/PartOfAPlant";

const Flower = () => {
	const [part, setPart] = useState("");
	const isMobile = useMediaQuery("(max-width: 840px)");
	return (
		<div>
			{isMobile ? (
				<div className='p-4 font-main'>
					<div className='flex justify-between items-center w-full mb-10'>
						<div className='flex gap-4 items-center'>
							<Link to='/plants'>
								<FaArrowLeftLong size={30} />
							</Link>
							<img
								src={logo}
								className='w-10'
							/>
						</div>
						<h1 className='text-primary text-xl font-bold'>Flower</h1>
					</div>
					<div className='grid justify-center items-center px-10 w-full relative'>
						<h1 className='font-bold text-2xl mb-10 text-center'>Flower Anatomy</h1>
						<img
							src={flower}
							className='absolute h-[450px] z-10 top-[70px]'
							alt='stummy'
						/>
						<div className='absolute z-50'>
							<button
								onClick={() => setPart("Stamen")}
								className='text-3xl font-bold relative top-[190px] left-[55px] opacity-0'>
								Stamen
							</button>
							<button
								onClick={() => setPart("Pistil")}
								className='text-3xl font-bold relative top-[280px] left-[90px] opacity-0'>
								Pistil
							</button>
							<button
								onClick={() => setPart("Petal")}
								className='text-3xl font-bold relative top-[300px] right-[120px] opacity-0'>
								Petal
							</button>
							<button
								onClick={() => setPart("Ovule")}
								className='text-3xl font-bold relative top-[330px] left-[140px] opacity-0'>
								Ovule
							</button>
							<button
								onClick={() => setPart("Sepal")}
								className='text-3xl font-bold relative top-[380px] left-[120px] opacity-0'>
								Sepal
							</button>
							<button
								onClick={() => setPart("Pedicel")}
								className='text-3xl font-bold relative top-[420px] right-[40px] opacity-0'>
								Pedicel
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className=''></div>
			)}
			<PartOfAPlant
				part={part}
				setPart={setPart}
			/>
		</div>
	);
};

export default Flower;
