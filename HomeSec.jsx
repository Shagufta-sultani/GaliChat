import { Fragment } from "react"
import { SetUp } from "./assets/asset"

const HomeSec = () =>{
    return(
        <Fragment>
            <section className="home-sec container">
                <h3 className="heading heading3">No Code AI Agent</h3>
                <h2 className=" heading heading2">Setup in just 3 minutes</h2>
                <div className=" hero flex container">
                    {
                        SetUp.map((data, index) =>(
                            <div key={index} className="homeHero">
                                <h3 className="heading head3 ">{data.h3}</h3>
                                <p className="heading para2">{data.decs}</p>
                                <img src={data.img} alt="" />
                            </div>
                        ))
                    }
                </div>
                    <button className="btn btn2">Create AI Agent</button>
                    <p className="para2 heading">No credit card required</p>
            </section>
            <section  className="">
                <div className="AI container">
                    <h2 className=" head2">Adaptable AI Agents for <span>Every Industry</span></h2>
                    <p>Our easy-to-use AI Agent can be easily implemented by businesses across all sectors.</p>

                </div>
            </section>
        </Fragment>
    )
}
export default HomeSec;