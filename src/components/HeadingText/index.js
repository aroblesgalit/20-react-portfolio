import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./headingText.css";
import resumePdf from "../../assets/images/AlvinGalit_Resume_July2020.pdf";

function HeadingText() {
    return (
        <div>
            <div className="uk-tile headingText uk-text-left" uk-height-viewport="expand: true">
                <div className="greeting">
                    <div className="hello">Hello! I'm</div>
                    <div className="name">Alvin<span>.</span></div>
                </div>
                <p className="subHeading">Web Developer and Graphic Designer</p>
                <Link to={resumePdf} target="_blank">
                    <button className="ctaBtn uk-button uk-button-default uk-margin">Resume</button>
                </Link>
            </div>
        </div>
    );
}

export default HeadingText;