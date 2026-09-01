import { Fragment, useState } from "react";
import { navBar } from "./assets/asset";


const Navbar = () =>{
const [ isOpen, setIsOpen ] = useState(false);
    return (
        <Fragment>
         <section class="block backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border
          border-white/80 text-white md:w-[60%] sm:w-[70%]  bg-gray-900 md:mx-auto navbar transition-all
            duration-300 rounded-full fixed left-1/2  -translate-x-1/2 top-3 z-50 border-none 
             py-2 px-3.5 pl-3">
                <div class="mx-auto flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <span class="block antialiased font-sans text-base leading-relaxed font-semibold text-white">GChat</span>
                        <a href="#" class=" block antialiased font-sans text-base leading-relaxed font-normal px-1 text-white">GailChat</a>
                    </div>
                    <div class="lg:flex hidden items-center gap-2">  
                       {
                        navBar.map((item, index) => (
                            <li class="block antialiased font-sans text-sm leading-normal text-white p-1 font-normal">
                                <a class="flex items-center" key={index} href={`#${item}`}> {item}</a>
                            </li>
                        ))
                       } 
                    </div>
                    <div className="hidden lg:flex items-center justify-end gap-2 lg:min-w-[200px]"> 
                       <li class="block antialiased font-sans text-sm leading-normal text-white p-1 font-normal">
                        <a href="#" class="flex items-center cursor-pointer">Sign In </a>
                       </li>
                        <button class="align-middle font-sans font-bold text-center transition-all
                         disabled:opacity-50  disabled:pointer-events-none text-black
                         text-xs bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10
                         hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85]
                        capitalize flex items-center rounded-full py-2 px-4 pr-3">Free Demo </button>
                    </div>
                    <div className="right flex flex-col"> 
                        <button class="  text-3xl cursor-pointer lg:hidden rounded-3xl bg-black-700"
                         onClick={() => setIsOpen(!isOpen)}>
                        &#8801;</button>
                    </div>
                </div>
                    {isOpen && (
                <div class="block basis-full overflow-hidden w-auto mx-auto transition-all duration-300">
                <div class="flex flex-col gap-4 mt-4 ml-4">
                   <div class="block lg:flex items-center gap-4 pt-4 ">  
                            <li class="block antialiased font-sans text-sm leading-normal text-white p-1 mb-2 font-normal">
                                <a class="flex items-center" href="#">Discover</a>
                            </li>
                            <li class="block antialiased font-sans text-sm leading-normal text-white p-1 mb-2 font-normal">
                                <a class="flex items-center text-center" href="#">Usecases</a>
                            </li>
                            <li class="block antialiased font-sans text-sm leading-normal text-white p-1 mb-2 font-normal">
                                <a class="flex items-center" href="#">Pricing</a>
                            </li>
                  </div>
                       <p class="block antialiased font-sans text-sm leading-normal text-white p-1 font-normal mb-2">
                        <a href="#" class="flex items-center cursor-pointer">Sign In </a>
                       </p>
                       <p class="block antialiased font-sans text-sm leading-normal text-white p-1 font-normal mb-2">
                        <a href="#" class="block lg:hidden">Free Demo</a>
                       </p>
                </div> 
            </div>        
            )}         
            </section>
        </Fragment>
    )
}
export default Navbar
