import React, { useEffect, useState } from "react";
import "./pages.css";
import Splash from "../components/Splash";
import otherPrintsSplash from "../assets/images/otherPrints-splash.jpg";
import ProjectInfo from "../components/ProjectInfo";
import API from "../utils/API";
import ProjectContent from "../components/ProjectContent";

export default function OtherPrints() {

    const [prints, setPrints] = useState([]);

    useEffect(() => {
        API.getGDPrints()
            .then(res => setPrints(res))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="container">
            <Splash imgUrl={otherPrintsSplash} />
            <ProjectInfo
                title="Other Print Designs"
                description="The following are various prints I designed in the last four years."
                services="Print Designs"
            />
            {
                prints.map(print => (
                    <ProjectContent
                        heading={print.heading}
                        description={print.description}
                        images={[{url: print.image, alt: print.description}]}
                    />
                ))
            }

        </div>
    )
}
