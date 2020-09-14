import React from "react";
import "./projectInfo.css";

export default function ProjectInfo() {
    return (
        <div className="project-info uk-flex uk-flex-column uk-flex-around">
            <h2 className="uk-text-center">Indigo Ball Fundraiser Event</h2>
            <div className="uk-flex uk-flex-column uk-width-100">
                <div className="uk-flex uk-margin-bottom uk-width-100">
                    <h3>ABOUT THE PROJECT</h3>
                    <p>
                        I was tasked to design the LGBTQ Center OC's (a gay and lesbian
                        non-profit organization) logo for their annual Indigo Ball black-tie
                        fundraiser event. The logo was to be classy and clever that would
                        work well on print and on the website.
                    </p>
                </div>
                <div className="uk-flex uk-margin-bottom uk-width-100">
                    <h3>SERVICES</h3>
                    <p>Logo Design, Print Design</p>
                </div>
            </div>
        </div>
    )
}
