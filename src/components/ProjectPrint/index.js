import React from "react";
import "./projectPrint.css";

export default function ProjectPrint({ heading, description, image, orientation }) {
    return (
        <div className="proj-print uk-flex uk-flex-column uk-width-100 uk-flex-middle">
            <h4>{heading}</h4>
            <p>{description}</p>
            <img 
                className={`print-${orientation}`} 
                src={image} 
                alt={description} 
            />
        </div>
    )
}
