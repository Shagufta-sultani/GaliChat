import { Fragment } from "react"
import { Main } from "./assets/asset"

const MainSec = () =>{
    return(
        <Fragment>
            <main className="mainsec flex">
                <div className="hero-main flex ">
                   {
                    Main.map((data, index) =>(
                    <div className="hero-sec container" key={index}>
                        <p className="para">{data.p}</p>
                       <h1>{data.heading}</h1>
                       <h1>{data.head}</h1>
                       <p>{data.para}</p>
                       <button className="btn btn1">{data.btn}</button>
                    </div>
                   ))
                   }
                </div>
            </main>
        </Fragment>
    )
}

export default MainSec