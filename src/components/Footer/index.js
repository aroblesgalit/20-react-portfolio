import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
    return (
        <footer id="footer">
            <div className="uk-contianer uk-flex uk-flex-column uk-flex-middle">
                <hr className="uk-divider-small divider" />
                <div>
                    <a href="https://github.com/aroblesgalit" target="_blank" rel="noopener noreferrer"><span uk-icon="icon: github" className="uk-icon socialLink"></span></a>
                    <a href="https://www.linkedin.com/in/aroblesgalit/" target="_blank" rel="noopener noreferrer"><span uk-icon="icon: linkedin" className="uk-icon socialLink"></span></a>
                </div>
                <Link to="/credits" className="credits uk-text-small uk-margin-top">Credits</Link>
                <p className="copyright uk-text-small">© 2020 Alvin Galit</p>
            </div>
        </footer>
    );
}

export default Footer;