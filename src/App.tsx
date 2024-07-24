import { Smile } from "lucide-react"
import { cn } from "./lib/utils"

const introItems = [{
  value: "👴🏾"
}, {
  value: "Male"
}, {
  value: "Guitar weilding "
}]

const experiences = [{
  discStyle: 'Active',
  name: "Navro",
  duration: "Nov. 2022 - Current"
},
]

function App() {



  return (
    <div className='relative w-screen flex flex-row items-center justify-center font-outfitRegular min-w-[22em] py-20'>
      <div className="absolute top-0 z-[-2] h-full w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className='relative layout h-5/6 flex flex-col justify-center items-center'>
        <header className="relative h-[10%] flex flex-col items-center justify-center w-[18em]">
          <div className="relative flex flex-row justify-center items-center gap-1 group">
            <p className="inline-block group-hover:animate-wave">👋🏾</p>
            <a href="#" className="relative inline-block transition-all ease-in-out delay-1000 duration-1000 font-outfitRegular text-3xl bg-[length:200px_100px] bg-[-100%] before:content[''] before:block before:absolute before:left-0 before:w-0 before:h-1 before:transition-all before:bg-nav-gradient before:hover:w-full before:bottom-0">
              nkem
              <span id="image-spin" className="image-spin rounded-[50%]"></span>
            </a>
          </div>
          <p className="mt-3 w-full md:w-72 font-outfitSemiBold text-center text-2xl">I <span className="bg-myPink create-span hover:animate-create-text">create</span> things for the web</p>
        </header>
        <main className="relative h-full sm:h-[80%] flex flex-col mt-6 gap-4 w-full justify-center items-center">
          <section className="relative h-fit sm:h-[50%] grid grid-rows-2 sm:grid-cols-5 gap-2 sm:gap-3 w-[21em] sm:w-full text-sm sm:text-md">
            <div className="relative sm:col-span-2 flex flex-col gap-1 w-full border border-gray-200 rounded-lg shadow-md px-6 py-2 justify-center bg-gradient-to-br from-gray-50 to-zinc-100">
              <div className="relative group flex items-center justify-center text:md sm:text-2xl shadow-md w-fit p-2 sm:p-3 rounded-xl border border-gray-100 transition-all ">
                {/* <Smile width="24" height="24" className="" /> */}
                😁
              </div>

              <p className="relative font-outfitRegular">Nkemjika.</p>

              <ul className="relative flex flex-col gap-1 pl-6 list-disc font-outfitLight text-gray-500">
                {
                  introItems.map(item => <li key={item.value} className="">{item.value}</li>)
                }
              </ul>
            </div>

            <div className="hidden sm:relative sm:flex sm:items-center sm:justify-center sm:row-span-2 sm:col-span-3 sm:w-full sm:border sm:border-gray-200 sm:rounded-lg sm:shadow-md sm:p-2 sm:bg-gradient-to-br sm:from-gray-50 sm:to-zinc-100">
              <img className="object-cover rounded-sm" src="/images/nkem.jpg" />
            </div>

            <div className="relative sm:col-span-2 flex flex-col w-full border border-gray-200 rounded-lg shadow-md px-6 py-2 justify-center item bg-gradient-to-br from-gray-50 to-zinc-100 font-outfitLight text-sm">
              <p className="overflow-y-auto sm:text-md">
                I'm a Full-Stack Web Developer with an MSc in Information Security. My focus is on building
                human-centered products and digital experiences, mostly through web applications.
              </p>
              <p className="mt-2 text-sm sm:text-md"> I am
                <span className="mx-2 p-1 rounded-sm bg-myYellow hover:text-myYellow hover:bg-myPink currently-open">currently
                  open</span>to
                Web Developer roles.</p>
            </div>
          </section>
          <section className="relative h-[48%] grid grid-cols-5 grid-rows-2 gap-5 w-[21em] sm:w-full">
            <div className="col-span-3 flex flex-col gap-3 w-full border border-gray-200 rounded-lg shadow-md p-6 justify-center bg-gradient-to-br from-gray-50 to-zinc-100">
              <div className="relative group flex items-center justify-center text:lg sm:text-2xl shadow-md w-fit p-2 sm:p-3 rounded-xl border border-gray-100 transition-all">
                💼
              </div>
              <p className="font-outfitRegular">Professional experience.</p>
              <p className="font-outfitLight text-gray-500">Journeys that are worth mentioning</p>

              <ul className="relative flex flex-col gap-1 pl-6 list-disc font-outfitLight text-gray-500 list-disc-pulse text-sm">
                {experiences.map(experience =>
                  <li key={experience.name} className={cn('w-full', experience.discStyle === 'Active' ? 'list-disc-pulse' : '')} >
                    <div className="w-full flex flex-row justify-between">
                      <p>{experience.name}</p>
                      <p className={cn(experience.discStyle === 'Active' && 'create-span')}>{experience.duration}</p>
                    </div>
                  </li>)}
              </ul>
            </div>
            <div className="col-span-2 flex flex-col gap-3 w-full border border-gray-200 rounded-lg shadow-md p-6 justify-center bg-gradient-to-br from-gray-50 to-zinc-100">
              <div className="relative group flex items-center justify-center text:lg sm:text-2xl shadow-md w-fit p-2 sm:p-3 rounded-xl border border-gray-100 transition-all">
                📚
              </div>
              <p className="font-outfitRegular">Currently Reading.</p>
            </div>
            <div className="col-span-3"></div>
            <div className="col-span-2"></div>

          </section>


        </main>
      </div>
    </div >
  )
}


export default App
