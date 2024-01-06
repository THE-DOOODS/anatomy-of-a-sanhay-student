import { useEffect, useState } from "react";
import { useMediaQuery } from "../..//hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import { useUserStore } from "../../store/user";
import { build } from "../../utils/build";
import { toast, Toaster } from "sonner";

const Spleen = () => {
	const { user } = useUserStore();
	const isMobile = useMediaQuery("(max-width: 840px)");
	const [comments, setComments] = useState([]);
	const [myComment, setComment] = useState("");

	const getAllComments = async () => {
		try {
			const res = await fetch(build("comments/spleen"), {
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
					subject: "spleen",
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
							<h1 className='text-primary text-xl font-bold'>Spleen</h1>
						</div>
						<div className='flex flex-col gap-2'>
							<img src='https://my.clevelandclinic.org/-/scassets/Images/org/health/articles/21567-spleen' />
							<p className='text-xl mt-4'>
								The spleen is a significant organ of the hematologic and
								reticuloendothelial systems. It is an intraperitoneal organ located in
								the left upper quadrant of the abdomen posterior and lateral to the
								stomach. [1] The spleen is situated anatomically behind the 9 and 11
								ribs on the left side of the body. It is a soft, spongy organ that
								performs several critical functions. It is the largest lymphatic organ
								in the body. It is a blood filter that removes damaged cells and foreign
								bodies from the bloodstream. It also produces red blood cells and
								certain types of white blood cells. The spleen is a highly vascular
								organ that filters blood and is a major site of immune responses. It is
								composed of red pulp and white pulp. The red pulp filters blood and
								removes old or damaged red blood cells. The white pulp produces
								antibodies (immunoglobulins) and filters the blood to remove bacteria,
								viruses, and other foreign substances.
							</p>
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

export default Spleen;
