import React from "react";
import "./projectLogo.css";
import timmyScottLogo from "../../assets/images/timmyScott_logo.png";

export default function ProjectLogo() {
    return (
        <div className="proj-logo">
            <img src={timmyScottLogo} alt="Logo for Timmy Scott Productions." />
        </div>
    )
}
