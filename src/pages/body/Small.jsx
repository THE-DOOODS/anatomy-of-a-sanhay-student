import { useEffect, useState } from "react";
import { useMediaQuery } from "../..//hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import { useUserStore } from "../../store/user";
import { build } from "../../utils/build";
import { toast, Toaster } from "sonner";

const Small = () => {
	const { user } = useUserStore();
	const isMobile = useMediaQuery("(max-width: 840px)");
	const [comments, setComments] = useState([]);
	const [myComment, setComment] = useState("");

	const getAllComments = async () => {
		try {
			const res = await fetch(build("comments/small-intestine"), {
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
					subject: "small-intestine",
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
							<h1 className='text-primary text-xl font-bold'>Small Intestine</h1>
						</div>
						<div className='flex flex-col gap-2'>
							<img src='https://i.pinimg.com/originals/51/49/63/5149635154083e48d8207847d11633af.jpg' />
							<p className='text-xl mt-4'>
								The small intestine (also referred to as the small bowel) is the
								specialized tubular structure between the stomach and the large
								intestine (also called the colon or large bowel) that absorbs the
								nutrition from your food. It is approximately 20-25 feet in length and
								is about as big around as your middle finger.
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

export default Small;
