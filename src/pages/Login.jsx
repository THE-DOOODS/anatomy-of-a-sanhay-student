import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";
import logo from "./../assets/logo.png";
import { useUserStore } from "../store/user";
import axios from "axios";
import { build } from "../utils/build";
import { toast, Toaster } from "sonner";
import { Cookies } from "react-cookie";

const Login = () => {
	const navigate = useNavigate();
	const { user, setUser } = useUserStore();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const isMobile = useMediaQuery("(max-width: 840px)");

	const login = async (e) => {
		e.preventDefault();

		try {
			const res = await axios.post(build("auth/login"), {
				email,
				password,
			});

			const data = await res.data;

			if (res.status >= 200 && res.status <= 205) {
				toast.success(data.message);
				setUser({ user: data.payload });
				const cookie = new Cookies();

				cookie.set("token", data?.payload?.token, "/");
			}

			new Promise((resolve, reject) => {
				if (res.status >= 200 && res.status <= 205) {
					setTimeout(() => {
						navigate("/anatomy");
					}, 2000);
					resolve();
				} else {
					reject();
				}
			});
		} catch (err) {
			console.error(err);
			toast.error(err.response.data.message);
		}
	};
	return (
		<div className='font-main'>
			<Toaster
				richColors
				position='top-center'
			/>
			{isMobile ? (
				<div className='grid justify-center items-center h-screen px-10 w-full'>
					<div className='flex flex-col gap-4 text-center'>
						<img
							src={logo}
							className='w-32 m-auto'
						/>
						<h1 className='font-extrabold text-3xl'>
							<span className='text-primary'>Log</span>in with AOSS
						</h1>
						<div className='text-left'>
							<p>Email</p>
							<input
								required
								onChange={(e) => setEmail(e.target.value)}
								type='email.'
								className='w-full border-2 border-gray-300 rounded-md p-2'
							/>
							<p className='mt-6'>Password</p>
							<input
								required
								onChange={(e) => setPassword(e.target.value)}
								type='password'
								className='w-full border-2 border-gray-300 rounded-md p-2'
							/>
							<button
								onClick={(e) => login(e)}
								className='w-full py-2 rounded-md text-center mt-4 bg-[#bb2e2e] text-white font-semibold'>
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
