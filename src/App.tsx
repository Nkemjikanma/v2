
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import ReactGA from "react-ga4";

function App() {
	ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_ID)

	ReactGA.send({
		hitType: "pageview",
		page: window.location.pathname,
		title: "Home"
	})

	return (
		<div className='relative min-h-[100dvh] border w-screen flex items-center justify-center font-outfitRegular min-w-[22em] pt-20 bg-gradient-to-br from-slate-50 via-gray-200 to-zinc-50'>
			<div className='relative layout min-h-[100dvh] grid grid-rows-[auto_1fr_auto] sm: place-items-center min-w-[22em] sm:min-w-[40em]'>
				<Header />
				<Main />
				<Footer />
			</div>
		</div >
	)
}


export default App
