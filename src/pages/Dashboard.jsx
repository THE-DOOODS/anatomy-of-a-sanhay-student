import { Navigate } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useUserStore } from "../store/user";
import { Cookies } from "react-cookie";
import Nav from "../components/Nav";

const Dashboard = () => {
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
					<div className='grid justify-center items-center h-screen px-10 w-full'>
						<h1>Hello {user?.user?.gender === "male" ? "Bro" : "Sis"}</h1>
					</div>
				</div>
			) : (
				<div className=''></div>
			)}
		</div>
	);
};

export default Dashboard;
