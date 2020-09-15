import React from "react";
import "./pages.css";
import Splash from "../components/Splash";
import hyperMockSplash from "../assets/images/hyperMock-splash.jpg";
import ProjectInfo from "../components/ProjectInfo";
import ProjectContent from "../components/ProjectContent";
import hyperMockSketch1 from "../assets/images/hyperMock-sketch-1.jpg";
import hyperMockSketch2 from "../assets/images/hyperMock-sketch-2.jpg";
import hyperMockSketch3 from "../assets/images/hyperMock-sketch-3.jpg";
import hyperMockVectorize from "../assets/images/hyperMock-vectorize.jpg";
import hyperMockLogo from "../assets/images/hyperMock-finalLogo.jpg";

export default function HyperMock() {

    // Brainstorm words
    const brainstormNote = {
        name: "HyperMock",
        notes: ["authoring tool for augmented and virtual reality content"]
    };

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

    const sketches = [
        {
            url: hyperMockSketch1,
            alt: "Logo sketches"
        },
        {
            url: hyperMockSketch2,
            alt: "Logo sketches"
        },
        {
            url: hyperMockSketch3,
            alt: "Logo sketches"
        }
    ];

    const vectors = [
        {
            url: hyperMockVectorize,
            alt: "Vectorized sketches of 3 logo ideas."
        }
    ];

    const finalLogo = [
        {
            url: hyperMockLogo,
            alt: "Final logo for HyperMock"
        }
    ];

    const researchNotes = [
        "user can upload a model or virtual object into a manager page on desktop",
        "user can author a simulation with virtual objects on desktop",
        "user can author step-by-step instructions or tasks on desktop",
        "user can author a simulation in virtual reality",
        "user can experience a simulation with step-by-step instructions in virtual reality",
        "user can experience step-by-step instructions in augmented reality"
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
                name={brainstormNote.name}
                notes={brainstormNote.notes}
                words={words}
                combinations={combinations}
            />
            <ProjectContent
                type="other"
                heading="2 sketches"
                description="Based on the words I have brainstormed, I then sketched out
                    some ideas."
                images={sketches}
            />
            <ProjectContent
                type="other"
                heading="3 vectors"
                description="Then I used Illustrator to vectorize the best ones."
                images={vectors}
            />
            <ProjectContent
                type="other"
                heading="4 final"
                description="Below is the final logo. I chose a blue monochromatic color
                    scheme to represent trust and intelligence in the product along with
                    the Play font to match the logo mark."
                images={finalLogo}
            />
            <ProjectContent
                type="brainstorm"
                heading="5 ui research"
                description="Moving on to the UI, I had to keep it user-friendly to easily
                    author a simulation and step-by-step instructions or tasks on desktop
                    and seamlessly experience it in AR/VR. Then, I looked into what other
                    competitors have done for inspirations. Below are the brainstorming,
                    moodboard, and sketches I did."
                name="Research"
                notes={researchNotes}
            />
        </div>
    )
}
