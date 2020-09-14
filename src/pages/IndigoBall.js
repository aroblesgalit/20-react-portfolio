import React from "react";
import "./pages.css";
import indigoBallSplash from "../assets/images/indigoBall-splash.jpg";

export default function IndigoBall() {
    return (
        <div className="container">
            <img src={indigoBallSplash} alt="Indigo Ball Logo" />
        </div>
    )
}
