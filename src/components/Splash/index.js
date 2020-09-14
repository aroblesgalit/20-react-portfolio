import React from "react";
import "./splash.css";
import indigoBallSplash from "../../assets/images/indigoBall-splash.jpg";

export default function Splash() {
    return (
        <div className="splash uk-flex uk-flex-center uk-flex-middle">
            <img src={indigoBallSplash} alt="Indigo Ball Logo" />
        </div>
    )
}
