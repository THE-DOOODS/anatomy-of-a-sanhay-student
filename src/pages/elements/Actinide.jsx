import { useMediaQuery } from "../../hooks/useMediaQuery";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const Actinide = () => {
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
						<h1 className='text-primary text-xl font-bold'>Actinides</h1>
					</div>
					<div className='flex flex-col gap-4 w-full font-bold text-2xl mt-24'>
						<Link
							to='/element'
							state={{
								name: "Actinium",
							}}>
							Actinium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Thorium",
							}}>
							Thorium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Protactinium",
							}}>
							Protactinium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Uranium",
							}}>
							Uranium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Neptunium",
							}}>
							Neptunium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Plutonium",
							}}>
							Plutonium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Americium",
							}}>
							Americium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Curium",
							}}>
							Curium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Berkelium",
							}}>
							Berkelium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Californium",
							}}>
							Californium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Einsteinium",
							}}>
							Einsteinium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Fermium",
							}}>
							Fermium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Mendelevium",
							}}>
							Mendelevium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Nobelium",
							}}>
							Nobelium
						</Link>
						<Link
							to='/element'
							state={{
								name: "Lawrencium",
							}}>
							Lawrencium
						</Link>
					</div>
				</div>
			) : (
				<div className=''></div>
			)}
		</div>
	);
};

export default Actinide;
