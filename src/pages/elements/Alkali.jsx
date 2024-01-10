import { useMediaQuery } from "../../hooks/useMediaQuery";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const Alkali = () => {
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
						<h1 className='text-primary text-xl font-bold'>Alkali Metals</h1>
					</div>
					<div className='flex flex-col gap-4 w-full font-bold text-2xl mt-24'>
						<Link
							to='/element'
							state={{
								name: "Sodium",
							}}>
							Sodium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Potassium",
							}}>
							Potassium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Francium",
							}}>
							Francium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Rubidium",
							}}>
							Rubidium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Cesium",
							}}>
							Cesium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Lithium",
							}}>
							Lithium
						</Link>
					</div>
				</div>
			) : (
				<div className=''></div>
			)}
		</div>
	);
};

export default Alkali;
