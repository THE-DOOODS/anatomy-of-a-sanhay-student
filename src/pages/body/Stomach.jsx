import { useEffect, useState } from "react";
import { useMediaQuery } from "../..//hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import { useUserStore } from "../../store/user";
import { build } from "../../utils/build";
import { toast, Toaster } from "sonner";

const Stomach = () => {
	const { user } = useUserStore();
	const isMobile = useMediaQuery("(max-width: 840px)");
	const [comments, setComments] = useState([]);
	const [myComment, setComment] = useState("");

	const getAllComments = async () => {
		try {
			const res = await fetch(build("comments/stomach"), {
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
					subject: "stomach",
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
							<h1 className='text-primary text-xl font-bold'>Stomach</h1>
						</div>
					</div>
					<div className='flex flex-col gap-2 px-4'>
						<img src='https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/08/2029327-What-to-know-about-the-fundus-of-the-stomach_1296x900-body-1024x711.png?w=1155&h=1892' />
						<p className='text-xl mt-4'>
							The stomach is a muscular hollow organ. It takes in food from the
							esophagus (gullet or food pipe), mixes it, breaks it down, and then
							passes it on to the small intestine in small portions. The entire
							digestive system is made up of one muscular tube extending from the mouth
							to the anus.
						</p>

						<div className='stomach-container'>
							{/* Stomach Regions Section */}
							<div className='regions-section mt-10'>
								<h2 className='text-2xl font-semibold mb-4'>Stomach Regions</h2>
								<ul>
									<li>
										<strong>Fundus:</strong> The upper rounded part of the stomach
									</li>
									<li>
										<strong>Cardia:</strong> The part nearest the esophagus
									</li>
									<li>
										<strong>Body:</strong> The main central part
									</li>
									<li>
										<strong>Pylorus:</strong> The lower narrow part
									</li>
								</ul>
							</div>

							{/* Tissue Layers Section */}
							<div className='layers-section mt-10'>
								<h2 className='text-2xl font-semibold mb-4'>Tissue Layers</h2>
								<ol>
									<li>
										<strong>Serosa:</strong> The outermost layer consisting of a thin
										layer of connective tissue that anchors the stomach.
									</li>
									<li>
										<strong>Muscularis:</strong> The layer of smooth muscle responsible
										for mixing and churning food through contractions.
									</li>
									<li>
										<strong>Submucosa:</strong> Beneath the mucosa, consisting of
										connective tissue and blood vessels providing nutrients to the mucosa.
									</li>
									<li>
										<strong>Mucosa:</strong> The innermost layer in contact with food,
										responsible for secreting digestive enzymes and hydrochloric acid. It
										has folds to increase surface area for nutrient absorption.
									</li>
								</ol>

								{/* Mucosa Subdivisions */}
								<p>
									The mucosa further subdivides into the surface epithelium, lamina
									propria, and muscularis mucosa.
								</p>
							</div>
						</div>
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

export default Stomach;
