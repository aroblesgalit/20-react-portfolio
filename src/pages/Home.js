import React from "react";
import About from "../components/About";
import HeadingText from "../components/HeadingText";

function Home() {
    return (
        <div className="uk-child-width-expand@s uk-text-center uk-grid-collapse" uk-grid="true">
            <HeadingText />
            <About />
        </div>
    );
}

export default Home;