import React from "react";
import "./pages.css";
import Splash from "../components/Splash";
import otherPrintsSplash from "../assets/images/otherPrints-splash.jpg";

export default function OtherPrints() {
    return (
        <div className="container">
            <Splash imgUrl={otherPrintsSplash} />
        </div>
    )
}
