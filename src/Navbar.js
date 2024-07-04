
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from "./images/logo.png";
import homeicon from "./images/homeicon.png";
import producticon from "./images/producticon.png";
import aboutus from "./images/aboutusicon.png";
import contacticon from "./images/contacticon.png";
import face from "./images/face.png"
import ins from "./images/ins.png"
import yo from "./images/yo.png"
import twi from "./images/twi.png"
import enquiryimg from "./images/enquiry.png"








const Navbar =() => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    
    
        return (


                

            <>
            <label className="home-inner">
                <input
                    type="text"
                    className="text-input"
                    placeholder='Search for products'
                    // value={searchTerm}
                    // onChange={(e) => setSearchTerm(e.target.value)}
                    // onKeyDown={handleKeyDown}
                />
            </label>
            <img className="companylogo" alt="Company Logo" src={logo} />

            <div className={`navbar ${menuOpen ? 'active' : ''}`}>
            <button className="menu-toggle" onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`nav-items ${menuOpen ? 'active' : ''}`}>
                <Link to="/">
                    <div className="nav-item">
                        <div className="icon"><img src={homeicon} alt="Home Icon" /></div>
                        <div className="navtext">Home</div>
                    </div>
                </Link>
                <Link to="/AboutUsPage">
                    <div className="nav-item">
                        <div className="icon"><img src={aboutus} alt="About Us Icon" /></div>
                        <div className="navtext">About Us</div>
                    </div>
                </Link>
                <div className="nav-item">
                    <div className="icon"><img src={producticon} alt="Products Icon" /></div>
                    <div className="navtext">Products</div>
                    <div className="dropdown">
                        <Link to="/bproducts">
                            <div className="dropdown-item">
                                Baler
                                <div className="sub-dropdown">
                                    <Link to="/Blt150"><div className="dropdown-item">BLT150</div></Link>
                                    <Link to="/Blt200"><div className="dropdown-item">BLT200</div></Link>
                                    <Link to="/Blt250"><div className="dropdown-item">BLT250</div></Link>
                                </div>
                            </div>
                        </Link>
                        <Link to="/Shredderproducts">
                            <div className="dropdown-item">
                                Shredder
                                <div className="sub-dropdown">
                                    <Link to="/Sht2000"><div className="dropdown-item">SHT2000</div></Link>
                                    <Link to="/Sht4000"><div className="dropdown-item">SHT4000</div></Link>
                                    <Link to="/Sht8000"><div className="dropdown-item">SHT8000</div></Link>
                                </div>
                            </div>
                        </Link>
                        <Link to="/Tyre cutting">
                            <div className="dropdown-item">
                                Tyre cutter
                                <div className="sub-dropdown">
                                    <Link to="/Tcpcr100"><div className="dropdown-item">TCPCR100</div></Link>
                                    <Link to="/Tctb100"><div className="dropdown-item">TCTB100</div></Link>
                                    <Link to="/Tcotr100"><div className="dropdown-item">TCOTR100</div></Link>
                                </div>
                            </div>
                        </Link>
                        <Link to="/Tyre Folding">
                            <div className="dropdown-item">
                                Tyre Folding
                                <div className="sub-dropdown">
                                    <Link to="/Tfpcr100"><div className="dropdown-item">TFPCR100</div></Link>
                                    <Link to="/Tftbr100"><div className="dropdown-item">TFTBR100</div></Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* <Link to="/Login"> */}
                    <div className="nav-item">
                        <div className="icon"><img src={enquiryimg} alt="Enquire Us Icon" /></div>
                        <div className="navtext">Enquire Us</div>
                    </div>
                {/* </Link> */}
                <Link to="/contact">
                    <div className="nav-item">
                        <div className="icon"><img src={contacticon} alt="Contact Us Icon" /></div>
                        <div className="navtext">Contact Us</div>
                    </div>
                </Link>
            </div>
        </div>
        
  
            </>

        );
 
    }
export default Navbar;
