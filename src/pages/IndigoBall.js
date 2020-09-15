import React from "react";
import "./pages.css";
import Splash from "../components/Splash";
import indigoBallSplash from "../assets/images/indigoBall-splash.jpg";
import ProjectInfo from "../components/ProjectInfo";
import ProjectContent from "../components/ProjectContent";
import indigoBallSketch1 from "../assets/images/indigoBall-sketch-1.jpg";
import indigoBallSketch2 from "../assets/images/indigoBall-sketch-2.jpg";
import indigoBallSketch3 from "../assets/images/indigoBall-sketch-3.jpg";
import indigoBallVectorize from "../assets/images/indigoBall-vectorize.jpg";

export default function IndigoBall() {

    // Brainstorm words
    const words = [
        {
            word: "indigo",
            graphics: ["color", "plant"]
        },
        {
            word: "ball",
            graphics: ["circle", "disco ball", "moon", "black tie"]
        },
        {
            word: "fundraiser",
            graphics: ["heart", "hands", "money"]
        }
    ];

    const combinations = [
        ["color", "circle", "heart"],
        ["color", "disco ball", "heart"],
        ["color", "moon", "heart"],
        ["color", "disco ball"],
        ["color", "circle"]
    ];

    const sketches = [
        {
            url: indigoBallSketch1,
            title: "Logo sketches"
        },
        {
            url: indigoBallSketch2,
            title: "Logo sketches"
        },
        {
            url: indigoBallSketch3,
            title: "Logo sketches"
        }
    ];

    const vectors = [
        {
            url: indigoBallVectorize,
            title: "Vectors"
        }
    ]

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
            <ProjectContent 
                type="brainstorm"
                heading="1 brainstorm"
                description="To design the logo, I first did a brainstorm on the words
                    associated with the event to come up with ideas for the preliminary
                    sketches."
                words={words}
                combinations={combinations}
            />
            <ProjectContent
                type="other"
                heading="2 sketches"
                description="After I have brainstormed some ideas, I do some sketches."
                images={sketches}
            />
            <ProjectContent
                type="other"
                heading="3 vectors"
                description="Once I've shared the sketches with the center, I take the
                    few they've chosen into Adobe Illustrator to vectorize them."
                images={vectors}
            />
        </div>
    )
}
