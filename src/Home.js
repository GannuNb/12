import { Component, React } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import './home.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Baler from "./images/baler.png"
import ecosustainimg from "./images/ecosustain.png";
import Baler1 from "./images/baler1.png"
import shredder from "./images/shredder.jpg"
import tyrefolding from "./images/tyre folding1.jpg"
import tyrecutting from "./images/tyre folding2.jpg"
import Tyrecuttingimg  from "./images/tyrecutting1.jpg";
import Baler4 from "./images/baler4.png"

class Home extends Component {
    render() {
        return (
            <>
                
                <div className="homecontainer">
               
                    <div className="hometopcontainer">
                        <b className="your">Your Partner in sustainable Recycling</b>
                        <br />
                        <b className="solu">Solutions</b>
                        <div className="at-vikah-ecotech">
                            At Vikah Ecotech, we are dedicated to pioneering innovative solutions in the field of recycling machinery manufacturing. With a commitment to sustainability and environmental stewardship, we design and produce cutting-edge machinery that empowers industries to efficiently process waste materials and contribute to a circular economy.
                        </div>                 
                    </div>

                    <div className="homecarousel">
                        <Carousel showArrows={true} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                            <div>
                                <img src={Baler4} alt="Slide 1" />
                                <p className="legend">Baler</p>
                            </div>
                            <div>
                                <img src={shredder} alt="Slide 2" />
                                <p className="legend">Shredder</p>
                            </div>
                            <div>
                                <img src={tyrecutting} alt="Slide 3" />
                                <p className="legend">Tyrecutting</p>
                            </div>
                            <div>
                                <img src={tyrefolding} alt="Slide 3" />
                                <p className="legend">Tyrecutting</p>
                            </div>
                        </Carousel>
                    </div>

                </div>

                <b className="homeproducts">Our Products</b>

                
                <div className="card-container-home">
                      <Link to ="/bproducts"><div className="card-item-home">
                            <img className="card-image-home" alt="Baler" src={Baler} />
                            <div className="card-text-home">Baler</div>
                        </div></Link>
                        <Link to ="/shredderproducts">
                        <div className="card-item-home">
                            <img className="card-image-home" alt="Shredders" src={shredder} />
                            <div className="card-text-home">Shredders</div>
                        </div></Link>
                        <Link to ="/Tyre cutting">
                        <div className="card-item-home">
                            <img className="card-image-home" alt="Cutting Equipment" src={Tyrecuttingimg} />
                            <div className="card-text-home">
                                <p>Cutting </p>
                                <p>Equipment</p>
                            </div>
                        </div></Link>
                        <Link to="/Tyre Folding">
                        <div className="card-item-home">
                            <img className="card-image-home" alt="Folding Equipment" src={tyrefolding} />
                            <div className="card-text-home">
                                <p>Folding</p>
                                <p>Equipment</p>
                            </div>
                        </div></Link>
                    </div>



                    <b className="tradeheading">Trade Fairs</b>
                   

                  
                    <div className="containertrade">
  <div className="trade1">
    <img alt="Trade Fair" src={ecosustainimg} />
    <div className="details">
      Eco Sustain Expo &amp; Conference, an exceptional event meticulously crafted by HITEX, Hyderabad that brings together a diverse community of professionals, visionaries, policymakers, researchers, and solution providers, all bound by a resolute dedication to shaping a sustainable future.
    </div>
    <div className="date">
      <span><b>Date of Exhibition:</b> 16, 17, 18 August 2024</span>
    </div>
    <div className="location">
      <span><b>Location:</b> HITEX Exhibition Center, Hyderabad</span>
    </div>
    <div className="booth">
      <span><b>Booth No:</b> 4K12</span>
    </div> 
  </div>
</div>









            </>
        );
    }
}

export default Home