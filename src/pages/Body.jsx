import { useMediaQuery } from "../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "../assets/logo.png";
import body from "../assets/bod.jpg";

const Body = () => {
	const isMobile = useMediaQuery("(max-width: 840px)");
	return (
		<div>
			{isMobile ? (
				<div className='p-4 font-main'>
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
						<h1 className='text-primary text-xl font-bold'>Body</h1>
					</div>
					<div className='grid justify-center items-center px-10 w-full relative'>
						<h1 className='font-bold text-2xl mb-10 text-center'>
							Upper Torso Anatomy
						</h1>
						<img
							src={body}
							className='absolute h-[450px] z-10 top-[70px]'
							alt='stummy'
						/>
						<div className='absolute z-50'>
							<Link
								to='/liver'
								className='text-3xl font-bold relative top-[150px] left-[120px] opacity-0'>
								Liver
							</Link>
							<Link
								to='/stomach'
								className='text-xl font-bold relative top-[200px] left-[90px] opacity-0'>
								Stomach
							</Link>
							<Link
								to='/large'
								className='text-xl font-bold relative top-[300px] right-[50px] opacity-0'>
								Large
							</Link>
							<Link
								to='/small'
								className='text-xl font-bold relative top-[300px] right-[20px] opacity-0'>
								Small
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

export default Body;
