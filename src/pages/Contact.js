import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div className="container">
            <h2 className="uk-text-center">Contact</h2>
            <div className="contact-form uk-child-width-1-2@m" uk-grid="true">
                <div className="contactInfo uk-flex uk-flex-column uk-margin-bottom">
                    <span className="contactLabel uk-text-muted uk-form-label">Email</span>
                    <span className="contactDesc uk-flex uk-flex-middle"><span className="contactIcon"
                        uk-icon="icon: mail"></span>aroblesgalit@gmail.com</span>
                    <span className="contactLabel uk-text-muted uk-form-label">Phone</span>
                    <span className="contactDesc uk-flex uk-flex-middle"><span className="contactIcon"
                        uk-icon="icon: phone"></span>714.949.1232</span>
                    <span className="contactLabel uk-text-muted uk-form-label">LinkedIn</span>
                    <span className="contactDesc uk-flex uk-flex-middle"><span className="contactIcon"
                        uk-icon="icon: linkedin"></span><Link to="https://www.linkedin.com/in/aroblesgalit/"
                            target="_blank">linkedin.com/in/aroblesgalit</Link></span>
                    <span className="contactLabel uk-text-muted uk-form-label">GitHub</span>
                    <span className="contactDesc uk-flex uk-flex-middle"><span className="contactIcon"
                        uk-icon="icon: github"></span><Link to="https://github.com/aroblesgalit"
                            target="_blank">github.com/aroblesgalit</Link></span>
                    <hr className="uk-divider-small" />
                </div>
                <form className="uk-form-stacked uk-position-relative">
                    <div className="uk-margin">
                        <label className="uk-form-label uk-text-muted" for="name">Name</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="name" type="text" placeholder="John Doe" />
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label uk-text-muted" for="email">Email</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="email" type="text" placeholder="johndoe@email.com" />
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label uk-text-muted" for="message">Email</label>
                        <div className="uk-form-controls">
                            <textarea className="uk-textarea" id="message" rows="5"
                                placeholder="Your message..."></textarea>
                        </div>
                    </div>
                    <button 
                        id="submitBtn"
                        className="uk-button uk-button-default uk-position-absolute uk-position-bottom-right"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;