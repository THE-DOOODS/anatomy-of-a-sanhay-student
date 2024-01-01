import { Link } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";
import logo from "./../assets/logo.png";

const Login = () => {
	const isMobile = useMediaQuery("(max-width: 768px)");

	return (
		<div className='font-main'>
			{isMobile ? (
				<div className='grid justify-center items-center h-screen px-10 w-full'>
					<div className='flex flex-col gap-4 text-center'>
						<img
							src={logo}
							className='w-32 m-auto'
						/>
						<h1 className='font-extrabold text-3xl'>
							<span className='text-primary'>Log</span>in width AOSS
						</h1>
						<div className='text-left'>
							<p>Email</p>
							<input
								type='text'
								className='w-full border-2 border-gray-300 rounded-md p-2'
							/>
							<p className='mt-6'>Password</p>
							<input
								type='text'
								className='w-full border-2 border-gray-300 rounded-md p-2'
							/>
							<button className='w-full py-2 rounded-md text-center mt-4 bg-[#bb2e2e] text-white font-semibold'>
								Login
							</button>
							{/* // eslint-disable-next-line react/no-unescaped-entities */}
							<p className='mt-2'>
								Don't have an account yet?{" "}
								<Link
									to='/signup'
									className='underline italic'>
									Sign up
								</Link>
							</p>
						</div>
					</div>
				</div>
			) : (
				<div className='grid justify-center items-center h-screen'></div>
			)}
		</div>
	);
};

export default Login;
