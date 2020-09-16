import React from "react";
import "./projectLogo.css";

export default function ProjectLogo({ url, alt }) {
    return (
        <div className="proj-logo uk-flex uk-flex-center uk-flex-middle">
            <img src={url} alt={alt} />
        </div>
    )
}
