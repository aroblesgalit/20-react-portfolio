import React from "react";
import "./gdNav.css";
import { Link } from "react-router-dom";

export default function GDNav() {

    const currentPath = window.location.pathname;

    return (
        <div className="gd-nav uk-position-fixed uk-flex uk-flex-between">
            <Link to={currentPath === "/other-prints" ? "/other-logos" : currentPath === "/other-logos" ? "/hypermock" : "/indigo-ball"}>
                <span
                    uk-icon="chevron-left"
                    className={`gd-nav-left ${currentPath === "/indigo-ball" ? "hidden" : ""}`}
                />
            </Link>
            <Link to={currentPath === "/indigo-ball" ? "/hypermock" : currentPath === "/hypermock" ? "/other-logos" : "/other-prints"}>
                <span uk-icon="chevron-right"
                    className={`gd-nav-right ${currentPath === "/other-prints" ? "hidden" : ""}`}
                />
            </Link>
        </div>
    )
}
