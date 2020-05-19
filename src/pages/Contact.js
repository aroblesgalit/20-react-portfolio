import React from "react";
import "./style.css";
import ContactInfo from "../components/ContactInfo";

function Contact() {
    return (
        <div className="container">
            <h2 className="uk-text-center">Contact</h2>
            <div className="uk-child-width-1-2@m" uk-grid="true">
                <ContactInfo />
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