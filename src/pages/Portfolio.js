import React from "react";

import "./style.css";

function Home() {
    return (
        <div className="container">
            <div
                className="uk-child-width-1-3@m uk-child-width-1-2@s uk-child-width-1-1"
                uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 300"
                uk-grid="true"
            >
            <p>Card element goes here</p>
            </div>
        </div>
    );
}

export default Home;