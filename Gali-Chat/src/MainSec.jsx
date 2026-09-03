import { Fragment } from "react"
import { assets, Main, MainIcons } from "./assets/asset";

const MainSec = () => {
    return (
        <Fragment>
            <main class=" relative sm:h-[125vh] h-[160vh] bg-[url(./assets/img/beautiful-shot-lake-surrounded-by-mountains-with-reflection-sky-water.jpg)]
             bg-linear-to-r from-gray-800 to-gray-900 bg-cover bg-center">
                <div className="mx-auto text-center flex justify-center items-center">
                    {
                        Main.map((data, index) => (
                            <div class=" hero-se mx-auto w-full pt-17 pb-20 pr-55 pl-55 absolute top-30 md:top-17" key={index}>
                                <p class=" relative items-center font-sans font-bold whitespace-nowrap 
                       border py-1.5 px-3 text-xs normal-case inline-flex rounded-full
                        border-gray-300 bg-gray-900/10 mb-4 select-text text-white">{data.p}</p>
                                <h1 class="block antialiased tracking-normal font-sans leading-tight 
                       text-white font-extrabold text-3xl md:text-4xl lg:text-5xl">{data.heading}</h1>
                                <h1 class="block antialiased tracking-normal font-sans leading-tight text-white
                        font-extrabold text-3xl md:text-4xl lg:text-5xl">{data.head}</h1>
                                <p class="block antialiased font-sans font-normal leading-relaxed mt-2 
                        lg:px-32 text-white text-base md:text-lg mt-4 lg:text-xl mb-5">{data.para}</p>
                                <button class="align-middle select-none font-bold 
                       text-center transition-all pointer
                        disabled:pointer-events-none text-xs py-2.5 px-4 bg-white 
                        text-blue-gray-900 shadow-md shadow-blue-gray-500/10
                        hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85]
                        focus:shadow-none active:opacity-[0.85] active:shadow-none
                        normal-case rounded-full">{data.btn}</button>
                            </div>
                        ))
                    }
                </div>
                <div class="mt-18 relative">
                    <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/gali/dashboard.png" alt=""
                     class="absolute z-10 rounded-2xl -translate-x-1/2 left-1/2  top-130 w-full max-w-[640px] lg:w-1/2 shadow-2xl"/>
                    <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/gali/chat.png"
                     alt="" class="absolute z-20 -translate-x-1/2 left-1/2 mt-2 md:mt-12 top-130 rounded-lg w-24 max-w-[240px] md:w-12 shadow-xl" />
                </div>
            </main>
            <section class="bg-gray-900">
                <div class="px-8 py-6 lg:py-28 relative">
                <div class="grid gap-y-10 gap-x-10 md:grid-cols-2 lg:grid-cols-4 mt-32">
                    {
                        MainIcons.map((d, i) =>(
                            <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none items-center" key={i}>
                                <d.icon class="h-7 w-7 text-white" />
                                <h2 class="block antialiased tracking-normal font-sans mb-2 mt-4 text-5xl text-white font-bold ">{d.number}</h2>
                                <h3 class="block antialiased tracking-normal font-sans text-xl leading-snug mb-2 font-semibold text-white "> {d.title}</h3>
                                <p class="block antialiased tracking-normal font-sans text-base leading-relaxed mb-2 font-normal text-white/60">{d.desc}</p>
                            </div>
                        ))
                    }
                </div>
                </div>
            </section>
        </Fragment>
    )
}

export default MainSec
