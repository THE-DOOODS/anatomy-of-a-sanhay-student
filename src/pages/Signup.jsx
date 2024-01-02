import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";
import logo from "../assets/logo.png";
import { CgBoy, CgGirl } from "react-icons/cg";
import axios from "axios";
import { build } from "../utils/build";
import { toast, Toaster } from "sonner";

const Signup = () => {
	const navigate = useNavigate();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [gender, setGender] = useState("male");
	const isMobile = useMediaQuery("(max-width: 840px)");

	const signup = async (e) => {
		e.preventDefault();

		if (
			[firstName.length, lastName.length, email.length, password.length].includes(
				0
			)
		) {
			toast.error("Please input all fields!");
			return;
		}

		try {
			const res = await axios.post(build("auth/register"), {
				firstName,
				lastName,
				email,
				password,
				gender,
			});

			const data = await res.data;

			if (res.status >= 200 && res.status <= 205) {
				toast.success(data.message);
			}

			new Promise((resolve, reject) => {
				if (res.status >= 200 && res.status <= 205) {
					setTimeout(() => {
						navigate("/");
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
		<div>
			<Toaster
				position='top-center'
				richColors
			/>
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
								required
								onChange={(e) => setFirstName(e.target.value)}
								type='text'
								className='w-full border-2 border-gray-300 rounded-md p-2'
							/>
							<p>Last Name</p>
							<input
								required
								onChange={(e) => setLastName(e.target.value)}
								type='text'
								className='w-full border-2 border-gray-300 rounded-md p-2'
							/>
							<p>Email</p>
							<input
								required
								onChange={(e) => setEmail(e.target.value)}
								type='email'
								className='w-full border-2 border-gray-300 rounded-md p-2'
							/>
							<p className=''>Password</p>
							<input
								required
								onChange={(e) => setPassword(e.target.value)}
								type='password'
								className='w-full border-2 border-gray-300 rounded-md p-2'
							/>
							<div className='flex justify-between gap-x-4 items-center w-full mt-4'>
								<button
									onClick={() => setGender("male")}
									className={`flex gap-2 rounded-full bg-blue-500 px-2 py-3 text-white font-bold items-center ${
										gender === "male"
											? "bg-blue-300 border border-blue-600 scale-110 text-blue-600 duration-150"
											: "bg-blue-500"
									}`}>
									<CgBoy size={30} />
									Sanhay Boy
								</button>
								<button
									onClick={() => setGender("female")}
									className={`flex gap-2 rounded-full px-2 py-3 text-white font-bold items-center ${
										gender === "female"
											? "bg-pink-300 border border-pink-600 scale-110 text-pink-600 duration-150"
											: "bg-pink-500"
									}`}>
									<CgGirl size={30} />
									Sanhay Girl
								</button>
							</div>
							<button
								onClick={(e) => signup(e)}
								className='w-full py-2 rounded-md text-center mt-4 bg-[#bb2e2e] text-white font-semibold'>
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
