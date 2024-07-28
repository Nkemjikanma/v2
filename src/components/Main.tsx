import { useGetReads } from "@/lib/hooks/useGetReads"
import { cn } from "../lib/utils"

import { experiences, introItems, socials, toolings } from "../lib/constants";
import { ToolTipAction } from "./ToolTipAction";

export const Main = () => {

	const { isSuccess, error, data: rawDataItems } = useGetReads()
	const data = rawDataItems?.flat().map((item) => ({
		title: item?.items[0]?.volumeInfo.title,
		author: item?.items[0]?.volumeInfo.authors.join(', '),
		imageUrl: item?.items[0]?.volumeInfo.imageLinks.smallThumbnail
	}))

	return <main className="relative min-h-fit min-w-[22em] sm:min-w-[40em] flex flex-col mt-6 w-full items-center gap-3">
		<section className="relative sm:h-[50%] grid size-auto sm:grid-cols-12 sm:grid-rows-2 gap-3 sm:gap-2 w-full max-w-[28em] sm:w-full sm:max-w-[50em] text-sm sm:text-md place-items-center ">
			<div className="relative sm:col-span-6 sm:row-span-1 flex flex-row gap-1 w-full border border-gray-200 rounded-lg shadow-md p-4 px-6 justify-between bg-gradient-to-br from-gray-50 to-zinc-100 group">
				<div className="flex flex-col gap-2">
					<div className="relative group flex items-center justify-center text:md sm:text-2xl shadow-md w-fit p-2 sm:p-3 rounded-xl border border-gray-100 transition-all group-hover:bg-img-gradient">
						👨🏾‍🦱
					</div>

					<p className="relative font-outfitRegular">Nkemjika Ohanyere.</p>

					<ul className="relative flex flex-col gap-1 pl-6 list-disc font-outfitLight text-gray-500">
						{
							introItems.map(item => <li key={item.value} className="">{item.value}</li>)
						}
					</ul>
				</div>
				<div className="relative flex items-center justify-center w-fit sm:hidden">
					<img className="object-cover rounded-sm w-24" src="/images/nkem.jpg" />
				</div>
			</div>

			<div className="hidden sm:relative sm:flex sm:items-center sm:justify-center sm:row-span-2 sm:col-span-6 sm:shrink-0">
				<div
					className="absolute -inset-2 rounded-lg bg-img-gradient opacity-75 blur"
				/>
				<img className="relative object-cover rounded-sm sm:w-[22.5em] " src="/images/nkem.jpg" />
			</div>

			<div className="relative sm:col-span-6 sm:row-span-1 flex flex-col w-full border border-gray-200 rounded-lg shadow-md px-6 py-4 sm:py-4 justify-center item bg-gradient-to-br from-gray-50 to-zinc-100 font-outfitLight text-sm group">
				<p className="overflow-y-auto sm:text-md text-justify">
					Experienced Frontend Engineer with an MSc in Information Security. Interested in blockchain technologies, in particular, Ethereum & Solidity. My current focus is on building human-centered products and digital experiences, mostly through web(3) applications.
				</p>
				<p className="mt-2 text-sm sm:text-md"> I am
					<span className="mx-1 p-1 px-2 rounded-sm bg-myYellow group-hover:bg-myGreen currently-open text-justify">currently
						open</span>to
					Frontend engineer and Software engineer roles.</p>
			</div>
		</section>
		<section className="relative sm:h-[48%] grid sm:grid-cols-12 sm:auto-rows-max gap-3 sm:gap-4 w-full max-w-[28em] sm:w-full sm:max-w-[50em] text-sm sm:text-md place-items-center">
			<div className="flex flex-col gap-2 sm:gap-2 col-span-12 sm:col-span-7 sm:row-span-2 w-full border border-gray-200 rounded-lg shadow-md p-5 justify-center bg-gradient-to-br from-gray-50 to-zinc-100 group">
				<div className="relative group flex items-center justify-center text:lg sm:text-2xl shadow-md w-fit p-2 sm:p-3 rounded-xl border border-gray-100 transition-all group-hover:bg-img-gradient duration-700">
					💼
				</div>

				<div
					className="absolute "
				/>
				<p className="font-outfitRegular">Professional experience.</p>
				<p className="font-outfitLight text-gray-500">Journeys that are worth mentioning</p>

				<ul className="relative flex flex-col gap-1 pl-6 list-disc font-outfitLight text-gray-500 list-disc-pulse text-sm">
					{experiences.map(experience =>
						<li key={experience.name} className={cn('w-full', experience?.discStyle === 'Active' ? 'list-disc-pulse' : '')} >
							<div className="w-full flex flex-row justify-between">
								<p>{experience.name}</p>
								<p className={cn(experience.discStyle === 'Active' && 'create-span')}>{experience.duration}</p>
							</div>
						</li>)}
				</ul>
			</div>

			{/*Socials */}
			<div className="flex flex-col gap-2 sm:gap-2 col-span-12 sm:col-span-5 sm:row-span-2 w-full border border-gray-200 rounded-lg shadow-md p-5 justify-center bg-gradient-to-br from-gray-50 to-zinc-100 group">
				<div className="relative group flex items-center justify-center text:lg sm:text-2xl shadow-md w-fit p-2 sm:p-3 rounded-xl border border-gray-100 transition-all group-hover:bg-img-gradient">
					🔗
				</div>
				<p className="font-outfitRegular">Let's connect.</p>
				<p className="font-outfitLight text-gray-500 text-sm">Some places you can find me</p>
				<div className="grid grid-cols-4 gap-1 flex-wrap mt-3 w-full place-items-center">
					{socials.map((social) =>
						<a key={social.name} href={social.profile} target="_blank">
							<ToolTipAction side="top" align="center" label={social.name}>
								<img src={social.logo} alt={social.name} className="w-8" />
							</ToolTipAction>
						</a>)
					}
				</div>
			</div>

			{/*tech stack */}
			<div className="flex flex-col gap-2 sm:gap-2 col-span-12 sm:row-span-2 w-full border border-gray-200 rounded-lg shadow-md p-5 justify-center bg-gradient-to-br from-gray-50 to-zinc-100 group">
				<div className="relative group flex items-center justify-center text:lg sm:text-2xl shadow-md w-fit p-2 sm:p-4 rounded-xl border border-gray-100 transition-all group-hover:bg-img-gradient">
					👨🏾‍💻
				</div>
				<p className="font-outfitRegular">Tech stack.</p>
				<p className="font-outfitLight text-gray-500 text-sm">Tooling I am familiar with and use</p>
				<ul className="grid grid-cols-4 sm:grid-cols-9 gap-3 flex-wrap mt-3 place-items-center">
					{toolings.map((tooling) =>
						<li key={tooling.tool}>
							<ToolTipAction side="top" align="center" label={tooling.tool}>
								<img src={tooling.link} alt={tooling.tool} className="w-8" />
							</ToolTipAction>
						</li>)
					}
				</ul>

			</div>

			{/* Currently readings */}
			<div className="col-span-12 w-full flex flex-col gap-2 sm:row-span-2 border border-gray-200 rounded-lg shadow-md p-5 justify-center bg-gradient-to-br from-gray-50 to-zinc-100 group">
				<div className="relative group flex items-center justify-center text:lg sm:text-2xl shadow-md w-fit p-2 sm:p-3 rounded-xl border border-gray-100 transition-all group-hover:bg-img-gradient">
					📚
				</div>
				<p className="font-outfitRegular">Currently Reading.</p>
				<div className="relative">
					{error && <p className="text-myOx text-sm font-outfitLight">If you are seeing this, i've reached my google books api limit. Check again tomorrow 🫶🏾.</p>}
					{isSuccess && data &&
						<div>
							<p className="text-sm text-gray-500">{`Authors: ${data.map(item => item.author).join(" and ")}`}</p>
							<div className="w-full flex flex-row gap-2 sm:gap-4 items-center justify-center mt-2">
								{data.map(item => <img key={item.title} src={item.imageUrl} className="w-24 sm:w-50" />)}
							</div>
						</div>}
				</div>
			</div>
		</section>
	</main>
}
