import React from "react";
import "./pages.css";
import Splash from "../components/Splash";
import otherPrintsSplash from "../assets/images/otherPrints-splash.jpg";
import ProjectInfo from "../components/ProjectInfo";

export default function OtherPrints() {
    return (
        <div className="container">
            <Splash imgUrl={otherPrintsSplash} />
            <ProjectInfo
                title="Other Print Designs"
                description="The following are various prints I designed in the last four years."
                services="Print Designs"
            />
        </div>
    )
}
