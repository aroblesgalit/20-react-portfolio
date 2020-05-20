import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import myLogo from "../../assets/images/alvinGalit_logoMark.png";
import NavToggle from "../NavToggle";

function Nav() {

    const [toggleState, setToggle] = useState();
    const [navToggle, setNavToggle] = useState();

    useEffect(() => {
        setToggle(true);
    }, []);

    function handleNavToggle() {
        setToggle(!toggleState);
        if (toggleState) {
            setNavToggle(<NavToggle handleOnClick={handleOnClick} />);
        } else {
            setNavToggle("");
        }
    }

    function handleOnClick() {
        setToggle(true);
        setNavToggle("");
    }

    return (
        <div>
            <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">

                <div className="uk-navbar-left">
                    <img src={myLogo} alt="My logo" className="logoMark" />
                    <Link className="uk-navbar-item uk-logo myLogo" to="/" onClick={handleOnClick}>Alvin Galit</Link>
                </div>

                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav navLink">
                        <li><Link to="/" className="">About</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div className="navMenuSmall" onClick={handleNavToggle}>
                        <span id="navMenuIcon" uk-icon="icon: menu"></span>
                    </div>
                </div>
            </nav>
            {navToggle}
        </div>
    );
}

export default Nav;