import React from "react";
import "./style.css";
import myImg from "../../assets/images/Alvin_headshot_sm.jpg";

function About() {
    return (
        <div>
            <div className="uk-tile aboutSection" uk-height-viewport="expand: true">
                <img src={myImg} alt="Me" className="uk-border-circle" uk-img="true" />
                <p className="uk-text-center">
                    Front-End Web Developer with a Bachelor of Fine Arts in Graphic Design from Cal Poly Pomona and a
                    Certificate in Full Stack Web Development from UT Austin. Skills in HTML, CSS, JavaScript, Node.js, and Express.
                    Strengths in balancing design and functionality, collaboration, and time-management. During my time in
                    the coding bootcamp, I’ve completed projects, such as a Full Stack app that allows aspiring individuals,
                    hoping to get into certain fields, find resources to help them get started. I was able to apply aspects
                    of UX/UI and agile development while working in a team of 4-5. Enrolling in the bootcamp made me realize
                    how much I enjoy coding and seeing my designs come to life. I look forward to leveraging the skills I’ve
                    learned to provide the best solutions for the client.
                </p>
            </div>
        </div>
    );
}

export default About;