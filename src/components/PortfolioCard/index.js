import React from "react";
// import { Link } from "react-router-dom";

function PortfolioCard({ title, description, imageUrl, githubUrl, deployedUrl }) {
    return (
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    <img src={imageUrl}
                        alt={title} />
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{title}</h3>
                    <p>{description}</p>
                    <a className="portfolioLinks" href={githubUrl}
                        target="_blank" rel="noopener noreferrer">GitHub Repository</a> { deployedUrl ? (<a className="portfolioLinks"
                        href={deployedUrl} target="_blank" rel="noopener noreferrer">Deployed Link</a>) : "" }
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;