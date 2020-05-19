import React from "react";
import "./style.css";
import myImg from "../../assets/images/Alvin_headshot_sm.jpg";

function Image() {
    return (
        <div>
            <div className="uk-tile aboutSection" uk-height-viewport="expand: true">
                <img src={myImg} alt="Me" className="uk-border-circle" uk-img="true" />
            </div>
        </div>
    );
}

export default Image;