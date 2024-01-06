import { useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { toast, Toaster } from "sonner";

const Dictionary = () => {
	const isMobile = useMediaQuery("(max-width: 840px)");
	const [word, setWord] = useState("");
	const [def, setDef] = useState([]);

	const getWord = async () => {
		if (!word || word === "") return toast.error("Please enter a word");
		try {
			const res = await fetch(
				`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
			);

			const data = await res.json();

			if (res.status !== 200) {
				return toast.error(data.message);
			}
			setDef(data);
			console.log(def);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<Toaster
				richColors
				position='top-center'
			/>
			{isMobile ? (
				<div className='p-4 font-main'>
					<div className='flex justify-between items-center w-full'>
						<div className='flex gap-4 items-center'>
							<Link to='/anatomy'>
								<FaArrowLeftLong size={30} />
							</Link>
							<img
								src={logo}
								className='w-10'
							/>
						</div>
						<h1 className='font-main font-bold text-primary'>Dictionary</h1>
					</div>
					<div className='grid justify-center items-center w-full relative pb-10'>
						<div className='mt-14'>
							<h1 className='font-main font-bold text-3xl mb-4'>Search word</h1>
							<div className='grid grid-cols-5 gap-x-4'>
								<input
									type='text'
									placeholder='Enter a word'
									onChange={(e) => setWord(e.target.value)}
									className='col-span-4 pl-2 py-4 rounded-md border border-zinc-500'
								/>
								<button
									onClick={getWord}
									className='col-span-1 bg-primary text-center rounded-md text-white font-bold'>
									Search
								</button>
							</div>
							<div className='mt-2'>
								{def.map((item, index) => {
									return (
										<div
											key={index}
											className='border border-zinc-500 rounded-md p-4'>
											<h1 className='font-mainy text-primary font-extrabold text-3xl'>
												{item.word}
											</h1>

											<div className='flex flex-col gap-4 mt-4'>
												<div className='flex gap-6 items-center'>
													{item?.phonetics[0]?.text && (
														<p className='font-main italic text-zinc-600'>
															{item.phonetics[0].text}
														</p>
													)}
													{item?.phonetics[0]?.audio && (
														<audio
															src={item.phonetics[0].audio}
															controls
															className='w-1/2'>
															Your browser does not support the
															<code>audio</code> element.
														</audio>
													)}
												</div>
												<h1 className='text-primary font-bold text-xl'>Definitions</h1>
												{item.meanings.map((item, index) => {
													return (
														<div key={index}>
															<p className='font-main text-primary'>{item.partOfSpeech}</p>
															<p className='font-mainy'>
																<span className='font-bold'>{index + 1}</span>.{" "}
																{item.definitions[0].definition}
															</p>
															<p className='mt-4 font-semibold'>Example</p>
															<p className='font-main italic'>{item.definitions[0].example}</p>
															<h1 className='font-bold text-primary mt-4'>Synonyms</h1>
															<div className='grid grid-cols-4'>
																{item.synonyms.map((item, index) => {
																	return (
																		<p
																			key={index}
																			className='col-span-2 font-main'>
																			{item}
																		</p>
																	);
																})}
															</div>
															<div className='h-[1.2px] bg-zinc-300 w-full mt-4' />
														</div>
													);
												})}
											</div>
										</div>
									);
								})}
							</div>
						</div>

						{/* Result */}
					</div>
				</div>
			) : (
				<div className=''></div>
			)}
		</div>
	);
};

export default Dictionary;
