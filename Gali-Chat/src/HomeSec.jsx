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
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class=" relative flex flex-col bg-clip-border text-gray-700 mb-8 text-center pt-6 bg-gray-100 border border-gray-300 rounded-2xl shadow-sm">
                  <div class="p-6 md:px-12">
                    <div class="relative items-center font-sans font-bold whitespace-nowrap
                     select-none py-1.5 px-3 text-xs rounded-lg bg-white border border-gray-300
                      text-gray-900 capitalize inline-block mb-2">
                        <span>Based on AI</span>
                    </div>
                    <h3 class="block antialiased tracking-normal font-sans text-3xl leading-snug text-blue-gray-900 font-bold">
                        Train Advanced GPT
                    </h3>
                    <p class="block antialiased font-sans font-light mx-auto mt-2 mb-8 text-lg text-gray-600 max-w-lg">
                        Gali Chat is based on the most advanced AI and NLP technologies available.
                    </p>
                      <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/gali/train-chat.png" alt=""
                     class="mx-auto mt-8"/>
                  </div>
                </div>

                <div class=" relative flex flex-col bg-clip-border text-gray-700 mb-8 text-center pt-6 bg-gray-100 border border-gray-300 rounded-2xl shadow-sm">
                  <div class="p-6 md:px-12">
                    <div class="relative items-center font-sans font-bold whitespace-nowrap
                     select-none py-1.5 px-3 text-xs rounded-lg bg-white border border-gray-300
                      text-gray-900 capitalize inline-block mb-2">
                        <span>Visual look</span>
                    </div>
                    <h3 class="block antialiased tracking-normal font-sans text-3xl leading-snug text-blue-gray-900 font-bold">
                        Customize and Match Your Brand
                    </h3>
                    <p class="block antialiased font-sans font-light mx-auto mt-2 mb-8 text-lg text-gray-600 max-w-lg">
                        A AI Agent that is distinctly branded can differentiate your customer service from competitors.
                    </p>
                      <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/gali/customize-chat.png"
                     alt="" class="mx-auto mt-8" />
                  </div>
                </div>
              </div>
            </section>

             <section class="container mx-auto">
                <div class="relative flex flex-col bg-clip-border text-gray-700 bg-gray-200 border border-gray-300 rounded-2xl mt-8 shadow-sm">
                    <div class="p-6">
                        <div class="md:flex items-center">
                            <div class="block my-auto pl-6">
                                <div class="relative items-center font-sans font-bold whitespace-nowrap select-none py-1.5 px-3 text-xs rounded-lg bg-white border 
                                  border-gray-300 text-gray-900 capitalize inline-block mb-4">
                                    <span>Ready to use</span>
                                </div>
                                <h3 class="block antialiased tracking-normal font-sans text-3xl leading-snug text-blue-gray-900 mb-4 font-bold">
                                    Add it to Your Website
                                </h3>
                                <p class="block antialiased font-sans text-base leading-relaxed text-gray-600 font-medium">
                                    No need for coding skills or technical support from your team. With just a few clicks our AI Agent is ready!
                                </p>
                                <div class="mt-6 text-lef">
                                    <div class="flex items-center gap-">
                                        <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 
                                          disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gray-900 text-white shadow-md 
                                          shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none
                                          active:opacity-[0.85] active:shadow-none normal-case rounded-full">
                                            Create AI Agent
                                        </button>
                                        <span class="text-gray-500 text-sm">No credit card required</span>
                                    </div>
                                </div>
                            </div>
                            <div class="ml-auto">
                                <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/gali/add-chat.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="container mx-auto py-10">
                <div class="flex max-w-6xl flex-col px-2">
                    <p class="block antialiased font-sans text-base leading-relaxed font-bold text-gray-900 mb-2"> Gali Testimonials</p>
                    <h3 class="block antialiased tracking-normal font-sans text-3xl leading-snug text-blue-gray-900 font-extrabold">What our clients say</h3>
                    <p class="block antialiased font-sans max-w-2xl font-normal text-gray-600 mb-8 text-lg">See what other people are thinking about our solution.</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700">
                            <div class="p-6">
                                <div class="inline-flex items-center mb-3 text-amber-500" >
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="cursor-pointer text-yellow-500 w-6 h-6">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="cursor-pointer text-yellow-500 w-6 h-6">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="cursor-pointer text-yellow-500 w-6 h-6">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="cursor-pointer text-yellow-500 w-6 h-6">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                                <p class="block antialiased font-sans font-normal text-inherit text-base !font-semibold !text-gray-800" >
                                    “It doesn't just feel like a tool; it feels like an extension of our team. The feedback from our customers has been overwhelmingly positive.”
                                </p>
                                <div class="mt-5 flex items-center justify-between gap-5">
                                    <div Taclass="!p-0">
                                        <h6 class="block antialiased tracking-normal font-sans text-base leading-relaxed text-blue-gray-900 font-bold">
                                            Taqi Ahmad
                                        </h6>
                                        <p class="block antialiased font-sans text-inherit mb-4 text-base font-normal !text-gray-500">
                                            Custom Support
                                            <a href="https://creative-tim.com/" target="_blank" rel="noreferrer" >
                                                <span class="ml-1">@CreativeTim</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700">
                            <div class="p-6">
                                <div class="inline-flex items-center mb-3 text-amber-500" >
                                   <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="cursor-pointer text-yellow-500 w-6 h-6">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="cursor-pointer text-yellow-500 w-6 h-6">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="cursor-pointer text-yellow-500 w-6 h-6">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="cursor-pointer text-yellow-500 w-6 h-6">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                                <p class="block antialiased font-sans font-normal text-inherit text-base !font-semibold !text-gray-800" >
                                    “It’s exactly what I was looking for. It engages our site visitors with the right answers and collects their information, so we get more leads.”
                                </p>
                                <div class="mt-5 flex items-center justify-between gap-5">
                                    <div Taclass="!p-0">
                                        <h6 class="block antialiased tracking-normal font-sans text-base leading-relaxed text-blue-gray-900 font-bold">
                                            Adam Kempinski
                                        </h6>
                                        <p class="block antialiased font-sans text-inherit mb-4 text-base font-normal !text-gray-500">
                                           Customer Success
                                            <a href="https://creative-tim.com/" target="_blank" rel="noreferrer" >
                                                <span class="ml-1">@MaterialTailwind</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700">
                            <div class="p-6">
                                <div class="inline-flex items-center mb-3 text-amber-500" >
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="cursor-pointer text-yellow-500 w-6 h-6">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="cursor-pointer text-yellow-500 w-6 h-6">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="cursor-pointer text-yellow-500 w-6 h-6">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="cursor-pointer text-yellow-500 w-6 h-6">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                                <p class="block antialiased font-sans font-normal text-inherit text-base !font-semibold !text-gray-800" >
                                    “This AI Agent offers support whenever the clients need it, making our service truly 24/7. It’s a game-changer, as we don't have a big team to handle all the requests.”
                                </p>
                                <div class="mt-5 flex items-center justify-between gap-5">
                                    <div Taclass="!p-0">
                                        <h6 class="block antialiased tracking-normal font-sans text-base leading-relaxed text-blue-gray-900 font-bold">
                                            Tina Feraro
                                        </h6>
                                        <p class="block antialiased font-sans text-inherit mb-4 text-base font-normal !text-gray-500">
                                            Chief Designer
                                            <a href="https://creative-tim.com/" target="_blank" rel="noreferrer" >
                                                <span class="ml-1">@IRA Design</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" mt-10 mb-10 flex">
                    <button class=" align-middle select-none font-sans font-bold text-center transition-all
                     disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3
                      px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg
                       hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]
                        active:shadow-none normal-case rounded-full">Create AI Agent</button>
                    <p class="text-gray-500 text-sm block mt-3 ml-4">No credit card required</p>
                </div>
            </section>

             <section class="px-8 py-10 ">
                <div class=" mx-auto">
                    <div class="mb-24">
                       <h2 class="block antialiased tracking-normal font-sans text-4xl leading-[1.3] text-blue-gray-900 mb-4 font-extrabold !leading-snug">
                          Frequently asked questions (FAQs)
                        </h2> 
                        <p class="block antialiased font-sans font-light text-lg text-gray-600 lg:w-3/5">
                          See what other people are asking. Don't forget to try the AI Agent available on the website for more information about our tool.
                        </p>
                    </div>
                    <div class="grid gap-x-8 md:grid-cols-1 lg:grid-cols-2">
                        <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                            <div class="relative bg-clip-border mt-4 rounded-xl overflow-hidden bg-white text-gray-700 mx-0">
                                <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 pb-6">What is Gali?</h4>
                            </div>
                            <div class="p-6 px-0 pt-0">
                                <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
                                    Gali is an advanced, smart AI Agent designed with the latest technology to interact with users by understanding their questions and 
                                    providing accurate answers. It can comprehend and respond to inquiries in real-time, 24 hours a day, seven days a week. 
                                </p>
                            </div>
                        </div>
                        <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                            <div class="relative bg-clip-border mt-4 rounded-xl overflow-hidden bg-white text-gray-700 mx-0">
                                <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 pb-6">
                                    How do I add Gali Chat to my website?
                                </h4>
                            </div>
                            <div class="p-6 px-0 pt-0">
                                <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
                                   To add Gali Chat to your website, you need to create an account, customize your AI Agent, and then copy the 
                                   code snippet provided to your website’s HTML. The AI Agent will then be live on your website, ready to assist your customers. 
                                </p>
                            </div>
                        </div>
                        <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                            <div class="relative bg-clip-border mt-4 rounded-xl overflow-hidden bg-white text-gray-700 mx-0">
                                <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 pb-6">
                                    Can I use Gali for free?
                                </h4>
                            </div>
                            <div class="p-6 px-0 pt-0">
                                <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
                                 Yes, Gali offers a free plan that includes all the basic features you need to get started but has limited functionalities.
                                  You can upgrade to a paid plan at any time to access more advanced features.
                                </p>
                            </div>
                        </div>
                        <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                            <div class="relative bg-clip-border mt-4 rounded-xl overflow-hidden bg-white text-gray-700 mx-0">
                                <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 pb-6">
                                    How do I train my AI Agent?
                                </h4>
                            </div>
                            <div class="p-6 px-0 pt-0">
                                <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
                                    To train your AI Agent, you need to provide it with the necessary information, such as your business support 
                                    documents, FAQs, website links and other relevant data. The AI Agent will then use this information
                                     to learn and improve its responses over time.
                                </p>
                            </div>
                        </div>
                        <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                            <div class="relative bg-clip-border mt-4 rounded-xl overflow-hidden bg-white text-gray-700 mx-0">
                                <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 pb-6">
                                    Will I see the AI Agents messages history?
                                </h4>
                            </div>
                            <div class="p-6 px-0 pt-0">
                                <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
                                    Yes, you can view the AI Agents message history in the dashboard, where you can see all the conversations 
                                    it has had with users. This feature allows you to monitor the AI Agents performance and make any necessary
                                     adjustments to improve its responses.
                                </p>
                            </div>
                        </div>
                        <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                            <div class="relative bg-clip-border mt-4 rounded-xl overflow-hidden bg-white text-gray-700 mx-0">
                                <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 pb-6">
                                    How does it takes for the AI Agent to be live on my website?
                                </h4>
                            </div>
                            <div class="p-6 px-0 pt-0">
                                <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
                                   Once you have created an account and customized your AI Agent, it will be live on your website 
                                   immediately after you copy and paste the code snippet provided. You can then start using the 
                                   AI Agent to interact with your customers and provide them with the information they need.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default HomeSec;
