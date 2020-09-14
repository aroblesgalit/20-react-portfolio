import React from "react";
import "./pages.css";
import Splash from "../components/Splash";
import indigoBallSplash from "../assets/images/indigoBall-splash.jpg";
import ProjectInfo from "../components/ProjectInfo";

export default function IndigoBall() {
    return (
        <div className="container">
            <Splash imgUrl={indigoBallSplash} />
            <ProjectInfo />
        </div>
    )
}
