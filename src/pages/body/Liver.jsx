import { useEffect, useState } from "react";
import { useMediaQuery } from "../..//hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import { useUserStore } from "../../store/user";
import { build } from "../../utils/build";
import { toast, Toaster } from "sonner";

const Liver = () => {
	const { user } = useUserStore();
	const isMobile = useMediaQuery("(max-width: 840px)");
	const [comments, setComments] = useState([]);
	const [myComment, setComment] = useState("");

	const getAllComments = async () => {
		try {
			const res = await fetch(build("comments/liver"), {
				method: "GET",
			});

			const comments = await res.json();

			setComments(comments);
		} catch (err) {
			console.log(err);
		}
	};

	const addNewComment = async () => {
		try {
			const res = await fetch(build("comments"), {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					comment: myComment,
					userId: user?.user?.id,
					subject: "liver",
					name: user?.user?.name,
				}),
			});

			if (res.status !== 201) {
				toast.error("Error creating a new comment");
				return;
			}

			getAllComments();
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getAllComments();
	}, []);

	return (
		<div>
			<Toaster
				richColors
				position='top-center'
			/>
			{isMobile ? (
				<div>
					<div className='p-4 font-main'>
						<div className='flex justify-between items-center w-full mb-10'>
							<div className='flex gap-4 items-center'>
								<Link to='/body'>
									<FaArrowLeftLong size={30} />
								</Link>
								<img
									src={logo}
									className='w-10'
								/>
							</div>
							<h1 className='text-primary text-xl font-bold'>Liver</h1>
						</div>
						<div className='flex flex-col gap-2'>
							<img src='https://cdn.britannica.com/13/74313-050-E5C55292/views-liver.jpg' />
							<p className='text-xl mt-4'>
								The liver is a critical organ in the human body that is responsible for
								an array of functions that help support metabolism, immunity, digestion,
								detoxification, vitamin storage among other functions. It comprises
								around 2% of an adult's body weight.
							</p>
							<div className='structure-section mt-10'>
								<h2 className='font-bold text-xl'>Structure</h2>
								<p>
									The liver consists of four lobes: the larger right lobe and left lobe,
									and the smaller caudate lobe and quadrate lobe. The left and right lobe
									are divided by the falciform (“sickle-shaped” in Latin) ligament, which
									connects the liver to the abdominal wall. The liver’s lobes can be
									further divided into eight segments, which are made up of thousands of
									lobules (small lobes). Each of these lobules has a duct flowing toward
									the common hepatic duct, which drains bile from the liver.
								</p>
							</div>

							{/* Parts Section */}
							<div className='parts-section mt-10'>
								<h2 className='font-bold text-xl mb-4'>Parts</h2>
								<ul>
									<li>
										<strong>Common Hepatic Duct:</strong> A tube that carries bile out of
										the liver. It is formed from the intersection of the right and left
										hepatic ducts.
									</li>
									<li>
										<strong>Falciform Ligament:</strong> A thin, fibrous ligament that
										separates the two lobes of the liver and connects it to the abdominal
										wall.
									</li>
									<li>
										<strong>Glisson’s Capsule:</strong> A layer of loose connective tissue
										that surrounds the liver and its related arteries and ducts.
									</li>
									<li>
										<strong>Hepatic Artery:</strong> The main blood vessel that supplies
										the liver with oxygenated blood.
									</li>
									<li>
										<strong>Hepatic Portal Vein:</strong> The blood vessel that carries
										blood from the gastrointestinal tract, gallbladder, pancreas, and
										spleen to the liver.
									</li>
									<li>
										<strong>Lobes:</strong> The anatomical sections of the liver.
									</li>
									<li>
										<strong>Lobules:</strong> Microscopic building blocks of the liver.
									</li>
									<li>
										<strong>Peritoneum:</strong> A membrane covering the liver that forms
										the exterior.
									</li>
								</ul>
							</div>
						</div>
						{/* Comments */}
						<div className='mt-14'>
							<h1 className='font-bold text-3xl text-primary'>Comments</h1>
							{comments?.length !== 0 || comments !== undefined ? (
								<div className='flex flex-col gap-2 mt-4'>
									{comments.map((comment) => (
										<div
											key={comment.id}
											className='flex flex-col'>
											<p className='text-xl font-semibold'>{comment?.name} says...</p>
											<p className='text-justify text-xl'>{comment.comment}</p>
											<p className='text-[13px] italic'>
												Commented on{" "}
												{new Date(comment?.createdAt).toLocaleDateString("en-US", {
													weekday: "long",
													year: "numeric",
													month: "long",
													day: "numeric",
													hour: "numeric",
													minute: "2-digit",
													hour12: true,
												})}
											</p>
											<hr></hr>
										</div>
									))}
								</div>
							) : (
								<h1 className='text-center font-bold text-2xl'>No Comments</h1>
							)}
							<div className='h-[1.5px] w-full bg-zinc-500 my-4' />
							<textarea
								type='text'
								onChange={(e) => setComment(e.target.value)}
								className='mt-2 border border-zinc-600 w-full p-4 rounded-md'
								placeholder='Enter comment or thoughts...'
							/>
							<button
								onClick={addNewComment}
								className='font-bold text-center text-white bg-primary w-full py-2 rounded-md'>
								Submit
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className=''></div>
			)}
		</div>
	);
};

export default Liver;
