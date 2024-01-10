import { useMediaQuery } from "../../hooks/useMediaQuery";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const Lanthanide = () => {
	const isMobile = useMediaQuery("(max-width: 840px)");
	return (
		<div>
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
						<h1 className='text-primary text-xl font-bold'>Lanthanides</h1>
					</div>
					<div className='flex flex-col gap-4 w-full font-bold text-2xl mt-24'>
						<Link
							to='/element'
							state={{
								name: "Cerium",
							}}>
							Cerium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Praseodymium",
							}}>
							Praseodymium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Neodymium",
							}}>
							Neodymium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Promethium",
							}}>
							Promethium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Samarium",
							}}>
							Samarium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Europium",
							}}>
							Europium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Gadolinium",
							}}>
							Gadolinium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Terbium",
							}}>
							Terbium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Erbium",
							}}>
							Erbium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Thulium",
							}}>
							Thulium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Ytterbium",
							}}>
							Ytterbium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Lutetium",
							}}>
							Lutetium
						</Link>
						<Link>Coming soon...</Link>
					</div>
				</div>
			) : (
				<div className=''></div>
			)}
		</div>
	);
};

export default Lanthanide;
