import { useEffect, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useUserStore } from "../../store/user";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { build } from "../../utils/build";
import { toast, Toaster } from "sonner";

const Gravity = () => {
	const { user } = useUserStore();
	const isMobile = useMediaQuery("(max-width: 840px)");
	const [comments, setComments] = useState([]);
	const [myComment, setComment] = useState("");

	const getAllComments = async () => {
		try {
			const res = await fetch(build("comments/gravity"), {
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
					subject: "gravity",
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
				position='top-center'
				richColors
			/>
			{isMobile ? (
				<div className='p-4 font-main'>
					<div className='flex justify-between items-center w-full mb-10'>
						<div className='flex gap-4 items-center'>
							<Link to='/apple'>
								<FaArrowLeftLong size={30} />
							</Link>
							<img
								src={logo}
								className='w-10'
							/>
						</div>
						<h1 className='text-primary text-xl font-bold'>Gravity Formula</h1>
					</div>
					<div className='flex flex-col gap-8 text-justify'>
						<p>
							Gravity refers to the force of attraction between two bodies, where the
							size and density of the bodies are taken into account. The formula for
							gravitational force, F, between two objects is given by F = GMm/r^2,
							where G is the gravitational constant, M and m are the masses of the two
							objects, r is the distance between them, and F is the force of gravity.
							The formula can be used to calculate the force of gravity between any two
							objects in the universe.
						</p>
						<h1 className='text-2xl font-semibold'>Gravitational Force</h1>
						<p>
							Gravitational force is the mutual attraction between objects with mass.
							It pulls objects toward each other and is responsible for phenomena like
							the Earth's gravitational pull on objects near its surface. The force is
							directly proportional to the product of the masses of the objects and
							inversely proportional to the square of the distance between their
							centers. This relationship is described by Newton's law of gravitation.
							The formula for gravitational force (F) is F = (G * m1 * m2) / r^2, where
							G is the gravitational constant, m1 and m2 are the masses of the objects,
							and r is the distance between their centers. Gravity plays a crucial role
							in understanding celestial motions and is a fundamental force in the
							universe
						</p>
						<img src='https://nuclear-power.com/wp-content/uploads/gravitational-force-equation.png' />
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
			) : (
				<div className=''></div>
			)}
		</div>
	);
};

export default Gravity;
