import React from "react";
import { useSpring, animated } from "react-spring";
import "./image.css";
import myImg from "../../assets/images/Alvin_headshot_sm.jpg";

function Image() {

    const propsImg = useSpring({
        from: {
            transform: "rotateZ(270deg)"
        },
        to: {
            transform: "rotateZ(0)"
        },
        config: {
            duration: 1000
        }
    });

    const propsWrapper = useSpring({
        from: {
            transform: "translateX(100%)"
        },
        to: {
            transform: "translateX(0)"
        },
        config: {
            duration: 1000
        }
    })

    return (
        <animated.div style={propsWrapper} className="uk-tile">
            <animated.img style={propsImg} src={myImg} alt="Me" className="uk-border-circle myImg" uk-img="true" />
        </animated.div>
    );
}

export default Image;