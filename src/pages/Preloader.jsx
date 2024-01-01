import logo from "./../assets/logo.png";
import { motion } from "framer-motion";

const Preloader = () => {
	return (
		<div className='grid place-content-center justify-center h-screen'>
			<motion.img
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 1 }}
				src={logo}
			/>
		</div>
	);
};

export default Preloader;
