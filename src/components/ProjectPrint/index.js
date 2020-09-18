import React from "react";
import "./projectPrint.css";

export default function ProjectPrint({ heading, description, image }) {
    return (
        <div className="proj-print uk-flex uk-flex-column uk-width-100 uk-flex-middle">
            <h4>{heading}</h4>
            <p>{description}</p>
            <img src={image} alt={description} />
        </div>
    )
}
