import React from "react";
import "./pages.css";
import Splash from "../components/Splash";
import hyperMockSplash from "../assets/images/hyperMock-splash.jpg";
import ProjectInfo from "../components/ProjectInfo";

export default function HyperMock() {
    return (
        <div className="container">
            <Splash imgUrl={hyperMockSplash} />
            <ProjectInfo
                title="HyperMock"
                description="While working at SimInsights, a game development company, we
                    needed a logo for a product we were currently developing. We called
                    this product HyperMock, an authoring tool for augmented and virtual 
                    reality (AR/VR) content. I was also tasked to design the user interface
                    (UI) for the product's desktop and AR/VR applications."
                services="Logo Design, UI Design"
            />
        </div>
    )
}
