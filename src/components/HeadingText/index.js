import React from "react";
import "./style.css";

function HeadingText() {
    return (
        <div>
            <div className="uk-tile headingText uk-text-left" uk-height-viewport="expand: true">
                <div className="greeting">Hello! I'm Alvin.</div>
                <p className="subHeading">Front-End Web Developer and Graphic Designer</p>
            </div>
        </div>
    );
}

export default HeadingText;