import { useMediaQuery } from "../../hooks/useMediaQuery";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const Halogen = () => {
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
						<h1 className='text-primary text-xl font-bold'>Halogen</h1>
					</div>
					<div className='flex flex-col gap-4 w-full font-bold text-2xl mt-24'>
						{/* Links */}
						<Link
							to='/element'
							state={{
								name: "Chlorine",
							}}>
							Chlorine
						</Link>
						<Link
							to='/element'
							state={{
								name: "Bromine",
							}}>
							Bromine
						</Link>
						<Link
							to='/element'
							state={{
								name: "Astatine",
							}}>
							Astatine
						</Link>
						<Link
							to='/element'
							state={{
								name: "Iodine",
							}}>
							Iodine
						</Link>
						<Link
							to='/element'
							state={{
								name: "Tennessine",
							}}>
							Tennessine
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

export default Halogen;
