import { Link } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";
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
					{/* Table */}
					{/* Rotate 180deg clockwise */}
					<div className='absolute z-50'>
						<div className='relative top-10 left-12 text-3xl opacity-0'>
							<Link to='/nobble'>Nobblegas</Link>
						</div>
						<div className='relative top-8 left-[80px] text-3xl opacity-0'>
							<Link to='/halogen'>Halogen</Link>
						</div>
						<div className='relative left-[20px] text-xl -rotate-45 opacity-0'>
							<Link to='/nonmetal'>Nonmetal</Link>
						</div>
						<div className='relative bottom2 left-[60px] text-xl -rotate-45 opacity-0'>
							<Link to='/metalloid'>Metalloid</Link>
						</div>
						<div className='relative bottom-6 left-[110px] text-5xl -rotate-45 opacity-0'>
							<Link to='/basic'>Basic</Link>
						</div>
						<div className='relative top-[150px] left-[60px] text-[55px] -rotate-90 opacity-0'>
							<Link to='/transition'>Transition</Link>
						</div>
						<div className='relative bottom-[4px] left-[133px] text-[30px] -rotate-90 opacity-0'>
							<Link to='/lanthanide'>Lanthanide</Link>
						</div>
						<div className='relative bottom-[70px] left-[163px] text-[30px] -rotate-90 opacity-0'>
							<Link to='/actinide'>Actinide</Link>
						</div>
						<div className='relative top-[170px] left-[50px] text-[30px] opacity-0'>
							<Link to='/alkaline'>Alkaline Earth</Link>
						</div>

						<div className='relative top-[155px] left-[60px] text-[30px] opacity-0'>
							<Link to='/alkali'>Alkali Metal</Link>
						</div>
					</div>
					<div className=''>
						<img src='https://www.allaboutcircuits.com/uploads/articles/periodic-table-of-the-elements.jpg' />
					</div>
				</div>
			) : (
				<div className=''></div>
			)}
		</div>
	);
};

export default Periodic;
