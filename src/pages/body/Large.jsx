import { useEffect, useState } from "react";
import { useMediaQuery } from "../..//hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import { useUserStore } from "../../store/user";
import { build } from "../../utils/build";
import { toast, Toaster } from "sonner";

const Large = () => {
	const { user } = useUserStore();
	const isMobile = useMediaQuery("(max-width: 840px)");
	const [comments, setComments] = useState([]);
	const [myComment, setComment] = useState("");

	const getAllComments = async () => {
		try {
			const res = await fetch(build("comments/large-intestine"), {
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
					subject: "large-intestine",
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
							<h1 className='text-primary text-xl font-bold'>Large Intestine</h1>
						</div>
						<div className='flex flex-col gap-2'>
							<img src='https://medlineplus.gov/ency/images/ency/fullsize/8832.jpg' />
							<p className='text-xl mt-4'>
								The large intestine (or colon, or large bowel) is the last structure to
								process food, taking the undigestible matter from the small intestine,
								absorbing water from it and leaving the waste product called feces.
								Feces are expelled from the body through the rectum and the anus.
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

export default Large;
