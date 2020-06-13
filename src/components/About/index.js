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
                <div className="uk-flex uk-flex-column uk-flex-middle">
                    <span className="uk-text-padding">Summary</span>
                    <p className="aboutMeText uk-text-justify uk-padding">
                        Front-End Web Developer with a Bachelor of Fine Arts in Graphic Design from
                        Cal Poly Pomona and a Certificate of Completion of the Coding Bootcamp
                        Certificate Program from the University of Texas at Austin. Skills in HTML,
                        CSS, JavaScript, MongoDB, Express, React, and Node.js. Strengths in balancing
                        design and functionality, collaboration, and time-management. Time in the
                        coding bootcamp, allowed for completion of projects, such as a full-stack
                        application for teachers to effortlessly create and share multiple-choice and
                        timed quizzes as well as for students to conveniently take them on their
                        mobile. Applied aspects of UX/UI and agile development while working in a
                        team of five. Enrollment in the bootcamp brought out a passion for coding
                        while bringing designs to life. Looking forward to continue growing and
                        leveraging the skills learned to provide the best solutions.
                    </p>
                </div>
                <div className="uk-flex uk-flex-column uk-flex-middle uk-margin-large-top">
                    <span className="uk-text-padding">How I got into Coding</span>
                    <p className="aboutMeText uk-text-justify uk-padding">
                    Ever since I landed my first full-time job as a graphic designer, I would catch 
                    myself watching my colleagues' monitors as they type away turning my mockups into 
                    functioning applications. This was the time I first took interest in the world of 
                    coding. I was intrigued. I wanted to do what they could do, to be able to code my 
                    own designs. I already knew HTML and CSS but I wanted to learn more about 
                    front-end frameworks/libraries. So I asked them for advice, which led me to a few 
                    online courses that were either free or very affordable including FreeCodeCamp and 
                    Udemy. Everyday after work, I would code for a few hours, but I'd get lost as I'm 
                    trying to learn a lot of things. I wasn't giving myself enough time to process and 
                    absorb the materials. I decided to check out some meetup groups for people getting 
                    into coding like me. I went to some and met a few like-minded people and even 
                    worked on projects together. But then I went back online and drowned myself in 
                    more courses, and I realized this wasn't working for me. I needed structure. So I 
                    decided to enroll myself into a bootcamp. I've always wanted to do it before but 
                    time kept me from pursuing that path. I decided to put my job on hold to fully 
                    immerse myself in the bootcamp. I was finally able to grasp the materials, and in 
                    the process, I grew a passion for coding. The bootcamp taught me a lot but more 
                    importantly how to continue learning. There are still a lot of things to learn, and 
                    I'm always looking forward to building new projects and continue growing.
                    </p>
                </div>
                <div className="uk-flex uk-flex-column uk-flex-middle uk-margin-large-top">
                    <span className="uk-text-padding">My Hobbies</span>
                    <p className="aboutMeText uk-text-justify uk-padding">
                    Outside of coding, I like to keep myself healthy by exercising, meal prepping, and 
                    going on hikes. I also enjoy drawing and watching movies. To those who know me 
                    very well, I am shy and an introvert at times, so I'm usually in the comfort of my 
                    own home. But I'm trying to be more outgoing and enjoy life to the fullest. There 
                    are so much more things I want to do and learn and wouldn't want to let life past 
                    me by.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;