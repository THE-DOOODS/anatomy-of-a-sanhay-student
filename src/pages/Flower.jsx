import { useMediaQuery } from "../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "../assets/logo.png";
import flower from "../assets/flower.jpg";

const Flower = () => {
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
							<Link
								to='/liver'
								className='text-3xl font-bold relative top-[190px] left-[55px]'>
								Stamen
							</Link>
						</div>
					</div>
				</div>
			) : (
				<div className=''></div>
			)}
		</div>
	);
};

export default Flower;
