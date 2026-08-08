import { Fragment } from "react"
import { navBar } from "./assets/asset"

const Navbar = () =>{
    return (
        <Fragment>
            <section className="header container">
                <div className="navbar flex">
                    <div className="left">
                        <span className="logo">GChat</span>
                        <a href="#">GailChat</a>
                    </div>
                    <div className="middle">  
                       {
                        navBar.map((item, index) => (
                            <a className="link" key={index} href={`#${item}`}> {item}</a>
                        ))
                       } 
                    </div>
                    <div className="right"> 
                        <a href="#">Sign In </a>
                        <button className="btn">Free Demo</button>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default Navbar