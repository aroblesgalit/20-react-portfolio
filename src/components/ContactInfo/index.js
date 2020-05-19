import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function ContactInfo() {
    return (
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
    );
}

export default ContactInfo;