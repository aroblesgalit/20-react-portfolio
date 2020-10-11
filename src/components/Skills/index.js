import React, { useEffect, useState } from "react";
import "./skills.css";
import SkillCard from "../SkillCard";
import API from "../../utils/API";

function Skills() {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        API.getSkills()
            .then(res => {
                setSkills(res);
            })
            .catch(err => {
                console.log("Something went wrong while fetching skills...", err);
            })
    }, []);

    let id = 0;

    return (
        <div className="skills-wrapper">
            <h2 className="uk-text-center">Skills</h2>
            <div className="skills-results uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-text-center" uk-grid="true">
                {
                    skills && (
                        skills.map(skill => {
                            id += 1;
                            return <SkillCard
                                key={id}
                                title={skill.title}
                                icon={skill.icon}
                            />
                        })
                    )
                }
            </div>
        </div>
    );
}

export default Skills;