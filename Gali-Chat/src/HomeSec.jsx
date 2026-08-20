import { Fragment } from "react"
import { AIagent, customer, customer1, Icon1, icon2, SetUp } from "./assets/asset"

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

                <section className="container icon-sec">
                    <div className="flex icon1">
                    {
                        Icon1.map((ic, index) =>(
                            <div key={index} className="ico">
                                <div className="flex con">
                                    <ic.icon className="ic" />
                                    <h3>{ic.name}</h3>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
                <div className="flex icon-sec">
                    {
                        icon2.map((ico, ind) =>(
                            <div key={ind} className="ico">
                                <div className="flex con">
                                    < ico.icon className="ic" />
                                    <h3>{ico.name}</h3>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
                </section>
            </section>

            <section className=" agent container">
                {
                  AIagent.map((i,n) =>(
                    <div key={n}>
                        <h3 className="heading">{i.name}</h3>
                        <h1 className="heading" >{i.h1}</h1>
                        <p>{i.para}</p>
                       <button className="btn btn2">{i.btn}</button><span>{i.p}</span>
                    </div>
                  ))
                }
            </section>

            <section className=" customer container">
                <div className="flex">
                    {
                 customer.map((i, r) =>(
                    <div key={r} className="cust">
                        <i.icon className="icon" />
                        <h3>{i.h3}</h3>
                        <p>{i.para}</p>
                    </div>
                 ))   
                }
                </div>
                <div className="flex">
                    {
                 customer1.map((i, r) =>(
                    <div key={r} className="cust cust1">
                        <i.icon className="icon" />
                        <h3>{i.h3}</h3>
                        <p>{i.para}</p>
                    </div>
                 ))   
                }
                </div>
            </section>

            <section className="container gobal">
               <div className="flex">
                 <div className="g-name flex">
                    <div className="name">
                       <h3>SA</h3>
                       <h3>IN</h3>
                    </div>
                    <div className="name">
                        <h3>US</h3>
                        <h3>DE</h3>
                        <h3>FR</h3>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute">
                        <h2>50+ Languages</h2>
                        <h3>Whether your customers are from USA, Spain, Germany, France or anywhere, our AI Agent speaks their language.</h3>
                    </div>
                </div>
               <div className="g-name flex">
                    <div className="name">
                        <h3>ES</h3>
                        <h3>RU</h3>
                        <h3>IT</h3>
                    </div>
                    <div className="name">
                        <h3>BR</h3>
                        <h3>JP</h3>
                    </div>
                </div>
               </div>
                <div className="center">
                    <button className="btn btn2">Create AI Agent</button>
                    <p>No credit card required</p>
                </div>
            </section>

            section
        </Fragment>
    )
}
export default HomeSec;