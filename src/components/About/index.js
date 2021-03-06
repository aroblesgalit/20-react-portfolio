import React from "react";
import "./about.css";
import PageTitle from "../PageTitle";

function About() {
    return (
        <div className="aboutWrapper uk-width-expand uk-margin-large-bottom">
            <div className="black-box"></div>
            <div className="gray-box"></div>
            <div className="white-box uk-flex uk-flex-center" uk-scrollspy="cls:uk-animation-slide-bottom; delay:300">
                <div className="about-box">
                    <PageTitle text="About" color="dark" />
                    <p className="aboutMeText uk-text-justify uk-padding">
                        I'm a Web Developer with a Bachelor of Fine Arts in Graphic Design from
                        Cal Poly Pomona and a Certificate of Completion of the Coding Bootcamp
                        Certificate Program from the University of Texas at Austin. My skills are
                        HTML, CSS, JavaScript, MongoDB, Express, React, and Node.js. My strengths
                        are balancing design and functionality, collaboration, and time-management.
                        During my time in the coding bootcamp, I completed projects, such as a
                        full-stack application for teachers to effortlessly create and share
                        multiple-choice and timed quizzes as well as for students to conveniently
                        take them on their mobile. I applied aspects of UX/UI and agile development
                        while working in a team of five. My enrollment in the bootcamp brought out
                        a passion for coding as I was able to bring my designs to life. I'm
                        driven and motivated to continue growing and learning.
                    </p>
                    <p className="aboutMeText uk-text-justify uk-padding uk-padding-remove-top">
                        When I'm not coding, you can either find me drawing, exercising, hiking,
                        or simply watching movies. Oh and I can also be doing some graphic design
                        freelance work on the side.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;