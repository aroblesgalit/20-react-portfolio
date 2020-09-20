import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import myLogo from "../../assets/images/alvinGalit_logoMark.png";
import NavToggle from "../NavToggle";

function Nav() {

    const [toggle, setToggle] = useState(false);

    function handleOnClick() {
        setToggle(false);
    }

    return (
        <div>
            <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">

                <div className="uk-navbar-left">
                    <Link to="/" onClick={handleOnClick}><img src={myLogo} alt="My logo" className="logoMark" /></Link>
                    <Link className="uk-navbar-item uk-logo myLogo" to="/" onClick={handleOnClick}>Alvin Galit</Link>
                </div>

                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav navLink">
                        <li><Link to="/" className="">About</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/graphic-design">Design</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div className="navMenuSmall" onClick={() => setToggle(!toggle)}>
                        <span id="navMenuIcon" uk-icon={`icon: ${toggle ? "close" : "menu"}`}></span>
                    </div>
                </div>
            </nav>
            {toggle ? <NavToggle handleOnClick={handleOnClick} /> : ""}
        </div>
    );
}

export default Nav;