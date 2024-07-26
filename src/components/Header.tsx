export const Header = () => {

	return <header className="relative h-[10%] flex flex-col items-center justify-center">
		<div className="relative flex flex-row justify-center items-center gap-1 group transition-all">
			<p className="inline-block group-hover:animate-wave text-3xl sm:text-5xl transition-all">👋🏾</p>
			<a href="#" className="relative inline-block transition-all ease-in-out delay-1000 duration-1000 font-outfitSemiBold text-4xl sm:text-6xl bg-[length:200px_100px] bg-[-100%] before:content[''] before:block before:absolute before:left-0 before:w-0 before:h-1 before:transition-all before:bg-nav-gradient before:hover:w-full before:bottom-0 ">
				nkem
				<span id="image-spin" className="image-spin rounded-[50%] transition-all"></span>
			</a>
		</div>
		<p className="mt-3 w-full  font-outfitRegular text-center text-3xl sm:text-5xl transition-all">I <span className="bg-myPink create-span hover:animate-create-text transition-all">create</span> for the web</p>
	</header>
}
