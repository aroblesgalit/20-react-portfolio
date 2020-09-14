import React from "react";
import "./projectContent.css";

export default function ProjectContent({ heading, description }) {
    return (
        <div className="proj-content uk-flex uk-flex-column uk-width-100 uk-flex-middle">
            <h4>{heading}</h4>
            <p>{description}</p>
        </div>
    )
}
