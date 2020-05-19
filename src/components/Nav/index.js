import React from "react";

function Nav() {
    return (
        <nav className="uk-navbar-container" uk-navbar>

            <div className="uk-navbar-left">
                <a className="uk-navbar-item uk-logo" href="/">Logo</a>
            </div>

            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    <li><a href="/">About</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;