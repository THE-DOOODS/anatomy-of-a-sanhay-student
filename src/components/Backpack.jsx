import React from "react";
import { useActionStore } from "../store/action";

const Backpack = () => {
	const { isOpenBackpack, setIsOpenBackpack } = useActionStore();
	console.log(isOpenBackpack);
	return (
		<div className='grid justify-center items-center h-screen px-10 w-full absolute z-10'>
			{isOpenBackpack ? (
				<div className=''>
					<h1>OPEN</h1>
				</div>
			) : (
				<div className=''></div>
			)}
		</div>
	);
};

export default Backpack;
