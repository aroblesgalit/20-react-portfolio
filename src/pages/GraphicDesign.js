import React, { useEffect, useState } from "react";
import "./pages.css";
import GDProjSection from "../components/GDProjSection";
import API from "../utils/API";

export default function GraphicDesign() {
    const [gdProjects, setGDProjects] = useState([]);

    useEffect(() => {
        API.getGDProjects()
            .then(res => setGDProjects(res))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="container">
            <h2 className="uk-text-center design-title">Graphic Design</h2>
            {
                gdProjects.map(project => (
                    <GDProjSection
                        key={project.title}
                        title={project.title}
                        type={project.type}
                        image={project.image}
                        link={project.link}
                    />
                ))
            }
        </div>
    )
}
