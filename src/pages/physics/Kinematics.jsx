import { useState, useEffect } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { build } from "../../utils/build";
import { useUserStore } from "../../store/user";
import { toast, Toaster } from "sonner";

const Kinematics = () => {
	const { user } = useUserStore();
	const isMobile = useMediaQuery("(max-width: 840px)");
	const [comments, setComments] = useState([]);
	const [myComment, setComment] = useState("");

	const getAllComments = async () => {
		try {
			const res = await fetch(build("comments/kinematics"), {
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
					subject: "kinematics",
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
						<h1 className='text-primary text-xl font-bold'>Kinematics Formula</h1>
					</div>
					<div className='flex flex-col gap-8 text-justify'>
						<p>
							Kinematics explores the motion of mechanical entities, disregarding
							physical properties and forces. It's dubbed the "geometry of motion,"
							employing algebra for mathematical modeling. Applied to systems, like
							gears in a transmission, it calculates speeds and ratios, crucial in
							engineering mechanical devices. Beyond terrestrial applications,
							kinematics delves into celestial motion, known as stellar kinematics,
							aiding astrophysics.
						</p>
						<h1 className='text-primary text-xl'>Significance in Design</h1>
						<p>
							In conceptualizing mechanical systems, kinematics incorporates initial
							geometries and velocities. While it gauges theoretical feasibility,
							real-world design complexities arise without material and force
							considerations. Enter kinetics, a discipline considering mass and driving
							forces. Derived from kinematics through algebraic calculations, kinetics
							factors in physical properties—material rigidity, tensile
							strength—working with physics and thermodynamics. Together, they
							transform theoretical kinematic models into practical, reliable systems.
						</p>
						<img src='https://i.ytimg.com/vi/MQKdkxnELQA/maxresdefault.jpg' />
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

export default Kinematics;
