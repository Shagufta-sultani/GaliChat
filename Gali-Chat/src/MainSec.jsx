import { Fragment } from "react"
import { assets, Main, MainIcons } from "./assets/asset" ;


const MainSec = () =>{
    return(
        <Fragment>
            <main className="mainsec container">
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
                <div className="hero-bottom">
                   <img src={assets.MainImage} alt="" className="h-img" />
                </div>
                <div className="bott-sect flex">
                    {
                        MainIcons.map((d, i) =>(
                            <div className="section-b" key={i}>
                                <d.icon className="icon" />
                                <h2 className="h2">{d.number}</h2>
                                <h3 className="h3">{d.title}</h3>
                                <p className="p">{d.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </main>
        </Fragment>
    )
}

export default MainSec