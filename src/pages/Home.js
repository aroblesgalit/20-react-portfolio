import React from "react";
import About from "../components/About";
import HeadingText from "../components/HeadingText";
import "./style.css";

function Home() {
    return (
        <div className="container">
            <div className="uk-child-width-expand@m uk-text-center uk-grid-collapse" uk-grid="true">
                <HeadingText />
                <About />
            </div>
        </div>
    );
}

export default Home;