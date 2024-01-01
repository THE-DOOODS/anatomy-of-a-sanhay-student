import { Link } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";
import logo from "../assets/logo.png";

const Signup = () => {
	const isMobile = useMediaQuery("(max-width: 768px)");

	return (
		<div>
			{isMobile ? (
				<div className='font-main grid justify-center items-center h-screen px-10 w-full'>
					<div className='flex flex-col gap-4 text-center'>
						<img
							src={logo}
							className='w-32 m-auto'
						/>
						<h1 className='font-extrabold text-3xl'>
							<span className='text-primary'>Sign</span>up with AOSS
						</h1>
						<div className='text-left flex flex-col gap-2'>
							<p>First Name</p>
							<input
								type='text'
								className='w-full border-2 border-gray-300 rounded-md p-2'
							/>
							<p>Last Name</p>
							<input
								type='text'
								className='w-full border-2 border-gray-300 rounded-md p-2'
							/>
							<p>Email</p>
							<input
								type='text'
								className='w-full border-2 border-gray-300 rounded-md p-2'
							/>
							<p className=''>Password</p>
							<input
								type='text'
								className='w-full border-2 border-gray-300 rounded-md p-2'
							/>
							<button className='w-full py-2 rounded-md text-center mt-4 bg-[#bb2e2e] text-white font-semibold'>
								Sign up
							</button>
							{/* // eslint-disable-next-line react/no-unescaped-entities */}
							<p className='mt-2 text-center'>
								Already had an account?{" "}
								<Link
									to='/'
									className='underline italic'>
									Log in
								</Link>
							</p>
						</div>
					</div>
				</div>
			) : (
				<div className=''></div>
			)}
		</div>
	);
};

export default Signup;
