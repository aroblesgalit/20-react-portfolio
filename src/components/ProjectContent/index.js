import React from "react";
import "./projectContent.css";
import Brainstorm from "../Brainstorm";

export default function ProjectContent({ type, heading, description }) {
    return (
        <div className="proj-content uk-flex uk-flex-column uk-width-100 uk-flex-middle">
            <h4>{heading}</h4>
            <p>{description}</p>
            {
                type === "brainstorm" ?
                    <Brainstorm
                        name="Indigo Ball"
                        about="a fundraiser event for the LGBTQ Center OC"
                    /> : ""
            }
        </div>
    )
}
