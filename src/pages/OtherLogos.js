import React from "react";
import "./pages.css";
import Splash from "../components/Splash";
import otherLogosSplash from "../assets/images/otherLogos-splash.jpg";

export default function OtherLogos() {
    return (
        <div className="container">
            <Splash imgUrl={otherLogosSplash} />
        </div>
    )
}
