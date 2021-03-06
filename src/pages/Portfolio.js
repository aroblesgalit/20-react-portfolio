import React, { useEffect, useState } from "react";
import "./pages.css";
import PortfolioCard from "../components/PortfolioCard";
import PageTitle from "../components/PageTitle";
import API from "../utils/API";

function Portfolio() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        API.getProjects()
            .then(res => setProjects(res))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="container">
            <div className="portfolio-wrapper">
                <PageTitle text="Portfolio" color="light" />
                <div
                    className="portfolio-cards"
                    uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 300"
                    // uk-grid="true"
                >
                    {
                        projects.map(project => (
                            <PortfolioCard
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                imageUrl={project.imageUrl}
                                githubUrl={project.githubUrl}
                                deployedUrl={project.deployedUrl}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Portfolio;