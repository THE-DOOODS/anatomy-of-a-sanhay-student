import { Link } from "react-router-dom";
import calc from "../assets/calc.png";
import dic from "../assets/dic.png";
import bag from "../assets/bag.png";

/* eslint-disable react/prop-types */
const Backpack = ({ isOpen, setIsOpen }) => {
	return (
		<>
			{isOpen && (
				<div className='fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 z-50'>
					<div className='flex justify-between gap-[70px] items-center'>
						<Link to='/calculator'>
							<img
								src={calc}
								className='w-[100px]'
							/>
						</Link>
						<Link to='/dictionary'>
							<img
								src={dic}
								className='w-[100px]'
							/>
						</Link>
					</div>
					<button onClick={() => setIsOpen(false)}>
						<img src={bag} />
					</button>
				</div>
			)}
		</>
	);
};

export default Backpack;
