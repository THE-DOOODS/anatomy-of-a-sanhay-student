import { useState, useEffect } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useUserStore } from "../../store/user";
import { toast, Toaster } from "sonner";
import { build } from "../../utils/build";

const Newton = () => {
	const { user } = useUserStore();
	const isMobile = useMediaQuery("(max-width: 840px)");
	const [comments, setComments] = useState([]);
	const [myComment, setComment] = useState("");

	const getAllComments = async () => {
		try {
			const res = await fetch(build("comments/newton"), {
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
					subject: "newton",
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
						<h1 className='text-primary text-xl font-bold'>Newton's Law of Motion</h1>
					</div>
					<div className='flex flex-col gap-8 text-justify'>
						<p>
							Newton's laws of motion are three laws that describe the relationship
							between the motion of an object and the forces acting on it. These laws,
							which provide the basis for Newtonian mechanics, can be paraphrased as
							follows: A body remains at rest, or in motion at a constant speed in a
							straight line, unless acted upon by a force. The net force on a body is
							equal to the body's acceleration multiplied by its mass or, equivalently,
							the rate at which the body's momentum changes with time. If two bodies
							exert forces on each other, these forces have the same magnitude but
							opposite directions.[1]
						</p>
						<h1 className='text-primary text-xl'>Laws</h1>
						<div className='mt-4 flex flex-col gap-2'>
							<h1 className='font-semibold'>First Law</h1>
							<p>
								Every body continues in its state of rest, or of uniform motion in a
								straight line, unless it is compelled to change that state by forces
								impressed upon it.[12]: 114  Newton's first law expresses the principle
								of inertia: the natural behavior of a body is to move in a straight line
								at constant speed. In the absence of outside influences, a body's motion
								preserves the status quo. The modern understanding of Newton's first law
								is that no inertial observer is privileged over any other. The concept
								of an inertial observer makes quantitative the everyday idea of feeling
								no effects of motion. For example, a person standing on the ground
								watching a train go past is an inertial observer. If the observer on the
								ground sees the train moving smoothly in a straight line at a constant
								speed, then a passenger sitting on the train will also be an inertial
								observer: the train passenger feels no motion. The principle expressed
								by Newton's first law is that there is no way to say which inertial
								observer is "really" moving and which is "really" standing still. One
								observer's state of rest is another observer's state of uniform motion
								in a straight line, and no experiment can deem either point of view to
								be correct or incorrect. There is no absolute standard of rest
							</p>
							<img src='data:image/png;base64,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' />
						</div>

						<div className='mt-4 flex flex-col gap-2'>
							<h1 className='font-semibold'>Second Law</h1>
							<p>
								Newton's second law is sometimes presented as a definition of force,
								i.e., a force is that which exists when an inertial observer sees a body
								accelerating. In order for this to be more than a tautology —
								acceleration implies force, force implies acceleration — some other
								statement about force must also be made. For example, an equation
								detailing the force might be specified, like Newton's law of universal
								gravitation. By inserting such an expression for into Newton's second
								law, an equation with predictive power can be written.[note 6] Newton's
								second law has also been regarded as setting out a research program for
								physics, establishing that important goals of the subject are to
								identify the forces present in nature and to catalogue the constituents
								of matter
							</p>
							<img src='data:image/jpeg;base64,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' />
						</div>
						<div className='mt-4 flex flex-col gap-2'>
							<h1 className='font-semibold'>Third Law</h1>
							<p>
								To every action, there is always opposed an equal reaction; or, the
								mutual actions of two bodies upon each other are always equal, and
								directed to contrary parts. Overly brief paraphrases of the third law,
								like "action equals reaction" might have caused confusion among
								generations of students: the "action" and "reaction" apply to different
								bodies. For example, consider a book at rest on a table. The Earth's
								gravity pulls down upon the book. The "reaction" to that "action" is not
								the support force from the table holding up the book, but the
								gravitational pull of the book acting on the Earth.[note 8] Newton's
								third law relates to a more fundamental principle, the conservation of
								momentum. The latter remains true even in cases where Newton's statement
								does not, for instance when force fields as well as material bodies
								carry momentum, and when momentum is defined properly, in quantum
								mechanics as well.
							</p>
							<img src='data:image/png;base64,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' />
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
			) : (
				<div className=''></div>
			)}
		</div>
	);
};

export default Newton;
