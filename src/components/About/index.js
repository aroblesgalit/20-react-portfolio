import React from "react";
import "./about.css";

function About() {
    return (
        <div className="aboutWrapper uk-width-expand">
            <svg className="svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0, 0 0, 100 100, 0" />
            </svg>
            <div className="uk-child-width-1-2@m uk-flex uk-flex-column uk-flex-middle">
                <h2 className="uk-text-center">About</h2>
                <p className="aboutMeText uk-text-justify uk-padding">
                    Web Developer with a Bachelor of Fine Arts in Graphic Design from
                    Cal Poly Pomona and a Certificate of Completion of the Coding Bootcamp
                    Certificate Program from the University of Texas at Austin. Skills in HTML,
                    CSS, JavaScript, MongoDB, Express, React, and Node.js. Strengths in balancing
                    design and functionality, collaboration, and time-management. Time in the
                    coding bootcamp, allowed for completion of projects, such as a full-stack
                    application for teachers to effortlessly create and share multiple-choice and
                    timed quizzes as well as for students to conveniently take them on their
                    mobile. Applied aspects of UX/UI and agile development while working in a
                    team of five. Enrollment in the bootcamp brought out a passion for coding
                    while bringing designs to life. Passionate and motivated to continue growing
                    as a lifelong learner.
                    </p>
            </div>
        </div>
    );
}

export default About;