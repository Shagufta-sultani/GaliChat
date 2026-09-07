import { Fragment } from "react"
import { AIagent, customer, customer1, Icon1, icon2, info, SetUp } from "./assets/asset"

const HomeSec = () =>{
    return(
        <Fragment>
           <section class="container mx-auto py-8">
                <div class="mb-10 text-center lg:mb-10">
                <h3 class="block antialiased font-sans mb-2 font-bold text-lg text-gray-500">No Code AI Agent</h3>
                <h2 class=" block antialiased font-sans text-base leading-relaxed text-blue-gray-900 mb-4 !text-2xl font-extrabold lg:!text-4xl">Setup in just 3 minutes</h2>
                </div>
                <div class="lg:w-[60rem] block md:flex gap-8 mx-auto">
                    {
                        SetUp.map((data, index) =>(
                         <div class="relative flex flex-col md:flex-row bg-clip-border rounded-xl text-gray-700 bg-gray-50">
                            <div key={index} class="p-6 ml-2 mr-5">
                                <h3 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900">{data.h3}</h3>
                                <p class="lock antialiased font-sans text-inherit text-base font-normal !text-gray-600 mb-4">{data.decs}</p>
                                <img src={data.img} alt="" class="w-60" />
                            </div>
                          </div>
                        ))
                    }
                </div>
                <div class="mt-8 text-center">
                    <a href="#" class="mt-5 w-full normal-case">
                    <button class="align-middle select-none font-sans font-bold
                     text-center transition-all disabled:opacity-50 disabled:shadow-none 
                     disabled:pointer-events-none text-xs py-3 px-6 bg-gray-900 text-white
                      shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 
                      focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none
                       normal-case rounded-full">Create AI Agent</button>
                    </a>
                    <p class="text-gray-500 text-sm block mt-3">No credit card required</p>
                </div>
            </section>

            <section  class="lg:py-28 py-10 px-8">
                <div class="mx-auto mb-24 text-center">
                    <h2 className="block antialiased tracking-normal font-sans text-4xl leading-[1.3] 
                    text-blue-gray-900 mb-4 !text-2xl font-extrabold lg:!text-4xl">
                        Adaptable AI Agents for <span class="text-blue-500 ">Every Industry</span></h2>
                    <p class="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit
                     mx-auto max-w-xl !text-gray-600">
                    Our easy-to-use AI Agent can be easily implemented by businesses across all sectors.</p>
                </div>

                <section class="w-full overflow-hidden">
                    <div class="flex flex-col lg:flex-row grid grid-cols-2 lg:grid-cols-8 justify-center gap-3 relative ">
                    {
                        Icon1.map((ic, index) =>(
                            <div key={index} class="relative grid items-center text-center font-sans whitespace-nowrap select-none border py-2
                             rounded-full capitalize text-gray-900 border-gray-300 px-6 font-semibold text-base">
                                <div class="absolute top-2/4 -translate-y-2/4 w-6 h-6 left-1.5">
                                    <ic.icon class="mx-2" width="12" height="20" />
                                </div>
                                    <span class="ml-4">{ic.name}</span>
                            </div>
                        ))
                    }
                    
                </div>
                 <div class="flex flex-col lg:flex-row grid grid-cols-2 lg:grid-cols-8 justify-center gap-3 mt-4 relative">
                    {
                        icon2.map((ico, ind) =>(
                            <div key={ind} class="relative grid items-center text-center font-sans whitespace-nowrap select-none border py-2
                            rounded-full capitalize text-gray-900 border-gray-300 px-3 font-semibold text-base">
                                <div class="absolute top-2/4 -translate-y-2/4 w-6 h-6 left-1.5">
                                    < ico.icon class="mx-2" width="12" height="20" />
                                </div>
                                    <span class="ml-4">{ico.name}</span>
                            </div>
                        ))
                    }
                    
                </div> 
                </section>
            </section>

            <section class="lg:py-10 py-10 px-8">
                {
                  AIagent.map((i,n) =>(
                    <div key={n}>
                        <h3 class="antialiased tracking-normal font-sans text-xl leading-[1.3]
                        text-blue-gray-900 mb-2 font-bold">{i.name}</h3>
                        <h2 class="antialiased tracking-normal font-sans text-4xl leading-[1.3] 
                        text-blue-gray-900 mb-4 !text-4xl font-extrabold lg:!text-5xl" >{i.h1}</h2>
                        <p class="antialiased font-sans text-xl font-normal leading-relaxed text-inherit
                        max-w-xl !text-gray-700">{i.para}</p>
                       <button class=" mt-3 align-middle select-none font-sans font-bold text-center 
                       transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none
                        text-xs py-3 px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg
                         hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]
                          active:shadow-none normal-case rounded-full">{i.btn}</button>
                          <span class="text-gray-500 text-sm ml-4">{i.p}</span>
                    </div>
                  ))
                }
                
                <div class="mt-12 grid max-w-6xl grid-cols-2 lg:gap-y-16 md:ml-5 gap-y-4 gap-x-4 md:grid-cols-4">
                    {
                 customer.map((i, r) =>(
                    <div key={r} class="relative flex flex-col bg-clip-border mt-8 mb-8 rounded-xl
                      bg-transparent text-gray-700 shadow-none">
                        <div class="relative bg-clip-border mx-4 overflow-hidden bg-white -mt-6 h-12 w-12 text-gray-900
                         grid items-center justify-center border border-gray-300 rounded-lg mb-4">
                          <i.icon class="h-6 w-6" />
                        </div>
                        <h3 class="block antialiased tracking-normal font-sans text-base 
                        leading-relaxed text-black font-bold mb-2">{i.h3}</h3>
                        <p class="block antialiased font-sans text-base leading-relaxed font-normal text-gray-500 mb-2">{i.para}</p>
                    </div>
                 ))   
                 }
                </div>
                <div class="mt-12 grid max-w-6xl grid-cols-2 lg:gap-y-16 md:ml-5 gap-y-4 gap-x-4 md:grid-cols-4">
                    {
                 customer1.map((i, r) =>(
                    <div key={r} class="relative flex flex-col bg-clip-border rounded-xl
                     bg-transparent text-gray-700 shadow-none mb-8">
                        <div class="relative bg-clip-border mx-4 overflow-hidden bg-white -mt-6 h-12 w-12 text-gray-900
                         grid items-center justify-center border border-gray-300 mb-4 rounded-lg">
                         <i.icon class="h-6 w-6" />
                        </div>
                        <h3 class="block antialiased tracking-normal font-sans text-base 
                        leading-relaxed text-black font-bold mb-2">{i.h3}</h3>
                        <p class="block antialiased font-sans text-base leading-relaxed font-normal text-gray-500 mb-2">{i.para}</p>
                    </div>
                 ))   
                }
                </div>
            </section>

            <section class="container mx-auto pt-8 px-4">
               <div class="md:flex justify-between">
                 <div class="flex items-center justify-center">
                    <div class="flex md:flex-col md:mr-8 items-center">
                       <div class="relative align-middle select-none font-sans
                        font-medium text-center uppercase transition-all disabled:opacity-50 
                        disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px]
                         h-12 max-h-[48px] rounded-lg border text-gray-900 hover:opacity-75 
                         focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 
                         border-gray-300 md:mb-12 text-1xl">
                        <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        SA</span>
                        </div>
                       <div class="relative align-middle select-none font-sans
                        font-medium text-center uppercase transition-all disabled:opacity-50 
                        disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px]
                         h-12 max-h-[48px] rounded-lg border text-gray-900 hover:opacity-75 
                         focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 
                         border-gray-300 md:mb-12 text-1xl">
                        <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        IN</span>
                        </div>
                    </div>
                    <div class="">
                       <div class="relative align-middle select-none font-sans
                        font-medium text-center uppercase transition-all disabled:opacity-50 
                        disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px]
                         h-12 max-h-[48px] rounded-lg border text-gray-900 hover:opacity-75 
                         focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 
                         border-gray-300 md:mb-12 text-1xl">
                        <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        US</span>
                        </div>
                        <div class="relative align-middle select-none font-sans
                        font-medium text-center uppercase transition-all disabled:opacity-50 
                        disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px]
                         h-12 max-h-[48px] rounded-lg border text-gray-900 hover:opacity-75 
                         focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 
                         border-gray-300 md:mb-12 text-1xl">
                        <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        DE</span>
                        </div>
                        <div class="relative align-middle select-none font-sans
                        font-medium text-center uppercase transition-all disabled:opacity-50 
                        disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px]
                         h-12 max-h-[48px] rounded-lg border text-gray-900 hover:opacity-75 
                         focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 
                         border-gray-300 md:mb-12 text-1xl">
                        <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        FR</span>
                    </div>
                    </div>
                </div>
                <div class="text-center mt-12 py-12 md:py-32 bg-[url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/gali/worldmap.png')] bg-contain bg-center bg-no-repeat">
                  <div class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 
                  max-w-[48px] h-12 max-h-[48px] rounded-lg text-sm border text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 border-gray-300 mb-4">
                    <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></span>
                  </div>
                        <h2 class="block antialiased tracking-normal font-sans text-4xl leading-[1.3] mb-4 font-extrabold text-gray-900">50+ Languages</h2>
                        <p class="block antialiased font-sans text-base leading-relaxed mx-auto font-bold mt-2 !text-2xl max-w-2xl text-gray-800">
                            Whether your customers are from USA, Spain, Germany, France or anywhere, our AI Agent speaks their language.</p>
                    
                </div>

                 <div class="flex items-center justify-center">
                    <div class="flex md:flex-col md:mr-8 items-center">
                       <div class="relative align-middle select-none font-sans
                        font-medium text-center uppercase transition-all disabled:opacity-50 
                        disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px]
                         h-12 max-h-[48px] rounded-lg border text-gray-900 hover:opacity-75 
                         focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 
                         border-gray-300 md:mb-12 text-1xl">
                        <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        ES</span>
                        </div>
                       <div class="relative align-middle select-none font-sans
                        font-medium text-center uppercase transition-all disabled:opacity-50 
                        disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px]
                         h-12 max-h-[48px] rounded-lg border text-gray-900 hover:opacity-75 
                         focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 
                         border-gray-300 md:mb-12 text-1xl">
                        <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        RU</span>
                        </div>
                       <div class="relative align-middle select-none font-sans
                        font-medium text-center uppercase transition-all disabled:opacity-50 
                        disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px]
                         h-12 max-h-[48px] rounded-lg border text-gray-900 hover:opacity-75 
                         focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 
                         border-gray-300 md:mb-12 text-1xl">
                        <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        IT</span>
                        </div>
                    </div>
                    <div>
                        <div class="relative align-middle select-none font-sans
                        font-medium text-center uppercase transition-all disabled:opacity-50 
                        disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px]
                         h-12 max-h-[48px] rounded-lg border text-gray-900 hover:opacity-75 
                         focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 
                         border-gray-300 md:mb-12 text-1xl">
                        <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        BR</span>
                        </div>
                        <div class="relative align-middle select-none font-sans
                        font-medium text-center uppercase transition-all disabled:opacity-50 
                        disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px]
                         h-12 max-h-[48px] rounded-lg border text-gray-900 hover:opacity-75 
                         focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 
                         border-gray-300 md:mb-12 text-1xl">
                        <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        JP</span>
                    </div>
                    </div>
                </div>
               </div>
                 <div class="text-center mt-10 mb-10">
                    <button class=" align-middle select-none font-sans font-bold text-center transition-all
                     disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3
                      px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg
                       hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]
                        active:shadow-none normal-case rounded-full">Create AI Agent</button>
                    <p class="text-gray-500 text-sm block mt-3">No credit card required</p>
                </div>
            </section>

            <section class="container mx-auto pt-8 px-4">
                <div class="mb-8 text-center pt-12 bg-gray-100 border border-gray-300 rounded-2xl shadow-sm">
                <div class="relative items-center font-sans font-bold whitespace-nowrap select-none py-1.5
                 px-3 text-xs rounded-lg bg-white border border-gray-300 text-gray-900 capitalize inline-block mb-2">
                     <span>source</span>
                 </div>
                <h2 class="block antialiased tracking-normal font-sans text-4xl leading-[1.3]
                 text-blue-gray-900 font-extrabold">Easily import Your Knowledge Base</h2>
                <p class="block antialiased font-sans font-light text-blue-gray-900 mx-auto 
                mt-2 mb-4 text-lg max-w-2xl">You need only 3 minutes to import your knowledge Base.</p>
                   {
                       info.map((d, im) =>(
                           <div class="relative w-11/12 md:w-2/3 mx-auto overflow-hidden md:overflow-visible" key="im">
                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/gali/easily-import.png"
                         alt="" />
                       </div> 
                    )) 
                }
                </div>
            </section>
        
        </Fragment>
    )
}
export default HomeSec;
