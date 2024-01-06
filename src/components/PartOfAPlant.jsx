/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { MdOutlineClose } from "react-icons/md";

const PartOfAPlant = ({ part, setPart }) => {
	const parts = [
		{
			name: "Stamen",
			description:
				"The male fertilizing organ of a flower, typically consisting of a pollen-containing anther and a filament.",
			image: "https://www.sciencefacts.net/wp-content/uploads/2021/12/Stamen.jpg",
		},
		{
			name: "Pistil",
			description:
				"The ovule producing part of a flower. The ovary often supports a long style, topped by a stigma. The mature ovary is a fruit, and the mature ovule is a seed. Stigma: The part of the pistil where pollen germinates. Ovary: The enlarged basal portion of the pistil where ovules are produced.",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPVrO9ilfcW1eyCWT0lrkUXakaF1IyWH3fLGnAcCfnZw&s",
		},
		{
			name: "Petal",
			description:
				"Petals are modified leaves that surround the reproductive parts of flowers. They are often brightly colored or unusually shaped to attract pollinators. All of the petals of a flower are collectively known as the corolla.",
			image:
				"https://passel2.unl.edu/image.php?uuid=1f277749f54f&extension=jpg&display=ORIGINAL&v=1644510666",
		},
		{
			name: "Ovule",
			description:
				"The ovule is the organ that forms the seeds of flowering plants. It is borne in the ovary of the flower and consists of nucellus protected by integuments, precursors of embryo/endosperm, and seed coat, respectively.",
			image:
				"https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/09/21083013/ovu-300x204.jpg",
		},
		{
			name: "Sepal",
			description:
				"Sepals are small, leaf-shaped, green-coloured and outermost part of the flower. They are the vegetative part of a flower, which functions by protecting the rising buds and by supporting the petals when in bloom. The sepals are considered as the modified leaves.",
			image: "https://www.sciencefacts.net/wp-content/uploads/2021/12/Sepals.jpg",
		},
		{
			name: "Pedicel",
			description:
				"A pedicel is a short flower stalk that holds up one single flower of an inflorescence (cluster of flowers). Pedicels support the flower and form a connection between the flower and the plant.",
			image:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Pedicel_%28PSF%29.png/1200px-Pedicel_%28PSF%29.png",
		},
	];

	return (
		<AnimatePresence>
			{part !== "" && (
				<div className='fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 z-50'>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, scale: [0.4, 1, 0.8] }}
						transition={{ duration: 0.4 }}
						exit={{ opacity: 0, scale: 0 }}
						className='flex flex-col gap-3 bg-white p-7 rounded-[30px]'>
						{/* filter the parts array by its name and the part parameter */}
						<div className='flex justify-between items-center w-full mb-10'>
							<img
								src={logo}
								className='w-20'
							/>
							<button
								onClick={() => setPart("")}
								className='text-3xl font-bold'>
								<MdOutlineClose size={50} />
							</button>
						</div>
						<div className='flex flex-col'>
							{parts
								.filter((p) => p.name === part)
								.map((p, idx) => (
									<div
										key={idx}
										className=''>
										<img src={p.image} />
										<h1 className='font-bold text-2xl'>{p.name}</h1>
										<h1 className='text-[15px]'>{p.description}</h1>
									</div>
								))}
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};

export default PartOfAPlant;
