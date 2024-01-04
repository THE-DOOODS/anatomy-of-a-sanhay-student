import { useUserStore } from "../store/user";
import logo from "../assets/logo.png";
import { IoMdLogOut } from "react-icons/io";
import { Cookies } from "react-cookie";
import { Toaster, toast } from "sonner";

const Nav = () => {
	const { user } = useUserStore();

	const logout = () => {
		toast.info("Logging out...");
		const cookie = new Cookies();
		cookie.set("/", "");

		setTimeout(() => {
			window.location.href = "/";
		}, 2000);
	};

	return (
		<div className='flex justify-between items-center'>
			<Toaster
				richColors
				position='top-center'
			/>
			<div className='flex gap-6 items-center'>
				<img
					src={logo}
					className='w-14'
				/>
				<h1 className='font-bold'> {user?.user?.name}</h1>
			</div>
			<IoMdLogOut
				onClick={logout}
				size={25}
			/>
		</div>
	);
};

export default Nav;
