import React from "react";
import "./pages.css";
import Splash from "../components/Splash";
import indigoBallSplash from "../assets/images/indigoBall-splash.jpg";
import ProjectInfo from "../components/ProjectInfo";

export default function IndigoBall() {
    return (
        <div className="container">
            <Splash imgUrl={indigoBallSplash} />
            <ProjectInfo 
                title="Indigo Ball Fundraiser Event" 
                description="I was tasked to design the LGBTQ Center OC's (a gay and lesbian
                    non-profit organization) logo for their annual Indigo Ball black-tie
                    fundraiser event. The logo was to be classy and clever that would
                    work well on print and on the website."
                services="Logo Design, Print Design"
            />
        </div>
    )
}
