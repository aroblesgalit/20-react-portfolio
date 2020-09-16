import React from "react";
import "./pages.css";
import Splash from "../components/Splash";
import otherLogosSplash from "../assets/images/otherLogos-splash.jpg";
import ProjectInfo from "../components/ProjectInfo";
import ProjectLogo from "../components/ProjectLogo";
import timmyScottLogo from "../assets/images/timmyScott_logo.png";
import solarTwistLogo from "../assets/images/solarTwist_logo.png";
import polynomialLogo from "../assets/images/polynomial_logo.png";
import careosityLogo from "../assets/images/careosity_logo.png";

export default function OtherLogos() {

    const logos = [
        {
            url: timmyScottLogo,
            alt: "Logo for Timmy Scott Productions.",
            shape: "vertical",
            background: "#3c0e54"
        },
        {
            url: solarTwistLogo,
            alt: "Logo for Solar Twist company.",
            shape: "horizontal",
            background: "#f4f4f4"
        },
        {
            url: polynomialLogo,
            alt: "Logo for a support group called Polynomial.",
            shape: "box",
            background: "#101526"
        },
        {
            url: careosityLogo,
            alt: "Logo for Care-osity company.",
            shape: "box",
            background: "#f4f4f4"
        }
    ];

    return (
        <div className="container">
            <Splash imgUrl={otherLogosSplash} />
            <ProjectInfo
                title="Other Logos"
                description="The following are logos I have designed in the past 4 years. I
                    started each by pencil and paper then vectorized them in Illustrator."
                services="Logo Designs"
            />
            {
                logos.map(logo => (
                    <ProjectLogo
                        key={logo.url}
                        url={logo.url}
                        alt={logo.alt}
                        shape={logo.shape}
                        background={logo.background}
                    />
                ))
            }
        </div>
    )
}