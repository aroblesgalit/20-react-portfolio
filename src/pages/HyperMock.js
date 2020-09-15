import React from "react";
import "./pages.css";
import Splash from "../components/Splash";
import hyperMockSplash from "../assets/images/hyperMock-splash.jpg";
import ProjectInfo from "../components/ProjectInfo";
import ProjectContent from "../components/ProjectContent";

export default function HyperMock() {

    // Brainstorm words
    const words = [
        {
            word: "authoring tool",
            graphics: ["gears", "wrench", "pencil"]
        },
        {
            word: "ar/vr",
            graphics: ["3d objects", "vr headset", "monitor"]
        }
    ];

    const combinations = [
        ["gears", "vr headset"],
        ["pencil", "vr headset"],
        ["pencil", "gears", "vr headset"],
        ["monitor", "vr headset"],
        ["monitor", "gears", "vr headset"],
        ["3d object", "vr headset"],
        ["3d object", "gears", "vr headset"]
    ];

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
            <ProjectContent
                type="brainstorm"
                heading="1 brainstorm"
                description="Before designing the logo, I started with brainstorming words
                    that describe HyperMock."
                words={words}
                combinations={combinations}
            />
        </div>
    )
}
