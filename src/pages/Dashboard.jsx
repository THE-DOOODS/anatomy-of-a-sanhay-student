import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useUserStore } from "../store/user";
import { Cookies } from "react-cookie";
import Nav from "../components/Nav";
import boy from "../assets/boy.png";
import girl from "../assets/girl.png";
import Backpack from "../components/Backpack";

const Dashboard = () => {
	const [isOpenBackpack, setIsOpenBackpack] = useState(false);
	const cookie = new Cookies();
	const token = cookie.get("token");
	const { user } = useUserStore();
	const isMobile = useMediaQuery("(max-width: 840px)");

	if (!token) return <Navigate to='/' />;

	return (
		<div className='font-main'>
			{isMobile ? (
				<div className='p-4'>
					<Nav />
					<div className='grid justify-center items-center h-screen px-10 w-full relative'>
						<div className='absolute z-50'>
							{user.user.gender === "male" ? (
								<>
									{/* Bag */}
									<button
										onClick={() => setIsOpenBackpack(!isOpenBackpack)}
										className='relative left-[180px] bottom-40 text-4xl opacity-0'>
										Backpack
									</button>
									{/* Waterbottle */}
									<Link
										to='/periodic'
										className='relative left-[180px] bottom-36 text-4xl opacity-0'>
										Waterbottle
									</Link>
									<Link
										to='/apple'
										className='relative right-[200px] bottom-36 text-4xl opacity-0'>
										Apple
									</Link>
									<Link
										to='/body'
										className='relative right-[170px] bottom-36 text-4xl opacity-0'>
										Body
									</Link>
								</>
							) : (
								<div>
									<button
										onClick={() => setIsOpenBackpack(!isOpenBackpack)}
										className='relative left-60 bottom-24 text-4xl opacity-0'>
										Backpack
									</button>
									<Link
										to='/apple'
										className='relative bottom-44 text-5xl opacity-0'>
										Apple
									</Link>
									<Link
										to='/body'
										className='relative bottom-36 text-5xl left-[30px] opacity-0'>
										Body
									</Link>
								</div>
							)}
						</div>

						{user?.user?.gender === "male" ? (
							<img
								className='absolute'
								src={boy}
								alt='Boy'
							/>
						) : (
							<img
								className='absolute'
								src={girl}
								alt='Girl'
							/>
						)}
					</div>
				</div>
			) : (
				<div className=''></div>
			)}
			<Backpack
				isOpen={isOpenBackpack}
				setIsOpen={setIsOpenBackpack}
			/>
		</div>
	);
};

export default Dashboard;
