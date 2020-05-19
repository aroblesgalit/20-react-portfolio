import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import myLogo from "../../assets/images/alvinGalit_logoMark.png";

function Nav() {
    return (
        <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">

            <div className="uk-navbar-left">
                <img src={myLogo} alt="My logo" className="logoMark" />
                <Link className="uk-navbar-item uk-logo myLogo" to="/">Alvin Galit</Link>
            </div>

            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav navLink">
                    <li><Link to="/" className="">About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;