import careerResourcesWiki from "../assets/images/careerResourcesWiki.png";
import artistWebApp from "../assets/images/artistWebApp.jpg";
import weatherDashboard from "../assets/images/weatherDashboard.png";
import digitalClass from "../assets/images/digitalClass.png";
import employeeTracker from "../assets/images/employeeTracker.jpg";
import champUnite from "../assets/images/champUnite.png";
import nodejsLogo from "../assets/images/nodejsLogo.svg";
import mongodbLogo from "../assets/images/mongodbLogo.svg";
import mysqlLogo from "../assets/images/mysqlLogo.svg";
import expressjsLogo from "../assets/images/expressjsLogo.svg";
import jqueryLogo from "../assets/images/jqueryLogo.svg";
import htmlLogo from "../assets/images/htmlLogo.svg";
import cssLogo from "../assets/images/cssLogo.svg";
import javascriptLogo from "../assets/images/javascriptLogo.svg";
import indigoBallBg from "../assets/images/gdproj_indigoBall_bg.jpg";
import hyperMockBg from "../assets/images/gdproj_hyperMock_bg.jpg";
import otherLogosBg from "../assets/images/gdproj_otherLogos_bg.jpg";
import otherPrintsBg from "../assets/images/gdproj_otherPrints_bg.jpg";
// Graphic Design logo designs
import timmyScottLogo from "../assets/images/timmyScott_logo.png";
import solarTwistLogo from "../assets/images/solarTwist_logo.png";
import polynomialLogo from "../assets/images/polynomial_logo.png";
import careosityLogo from "../assets/images/careosity_logo.png";
import transPrideLogo from "../assets/images/transPride_logo.png";
import sipsAndGigglesLogo from "../assets/images/sipsAndGiggles_logo.png";
import lifeGamesLogo from "../assets/images/lifeGames_logo.png";
import professionalMixerLogo from "../assets/images/professionalMixer_logo.png";

const projects = [
    {
        title: "ChampUnite",
        description: "A full-stack MERN game app where users go on a one-on-one card battle.",
        imageUrl: champUnite,
        githubUrl: "https://github.com/aroblesgalit/champ-unite",
        deployedUrl: "https://champ-unite-v01.herokuapp.com/"
    },
    {
        title: "Artist Web App",
        description: "A web app for an artist to show off his/her work as well as sell art.",
        imageUrl: artistWebApp,
        githubUrl: "https://github.com/aroblesgalit/artist-web-app",
        deployedUrl: "https://artist-web-app.herokuapp.com/"
    },
    {
        title: "Digital Class",
        description: "A full-stack MERN app allowing teachers to quickly and easily create and assign quizzes.",
        imageUrl: digitalClass,
        githubUrl: "https://github.com/aroblesgalit/digital-class",
        deployedUrl: "https://digital-class-production.herokuapp.com/"
    },
    {
        title: "Career Resources & Wiki",
        description: "A full-stack app that allows users to post and get resources about job fields of their choice.",
        imageUrl: careerResourcesWiki,
        githubUrl: "https://github.com/aroblesgalit/Project2",
        deployedUrl: "https://secure-shelf-77308.herokuapp.com/"
    },
    {
        title: "Weather Dashboard",
        description: "A weather dashboard app that shows the current and future weather information of a city.",
        imageUrl: weatherDashboard,
        githubUrl: "https://github.com/aroblesgalit/06-Weather-Dashboard",
        deployedUrl: "https://aroblesgalit.github.io/06-Weather-Dashboard/"
    },
    {
        title: "Employee Tracker",
        description: "A command-line interface app for tracking employees within a company.",
        imageUrl: employeeTracker,
        githubUrl: "https://github.com/aroblesgalit/12-Employee-Tracker"
    }
];

const graphicDesignProjects = [
    {
        title: "Indigo Ball",
        type: ["Logo Design", "Print"],
        image: indigoBallBg,
        link: "/indigo-ball"
    },
    {
        title: "HyperMock",
        type: ["Logo Design", "UI Design"],
        image: hyperMockBg,
        link: "/hypermock"
    },
    {
        title: "Other Logos",
        type: ["Logo Designs"],
        image: otherLogosBg,
        link: "/other-logos"
    },
    {
        title: "Other Print Designs",
        type: ["Print Designs"],
        image: otherPrintsBg,
        link: "https://www.alvingalit.com/"
    }
];

const graphicDesignLogos = [
    {
        url: timmyScottLogo,
        alt: "Logo for Timmy Scott Productions.",
        shape: "vertical",
        background: "#3c0e54"
    },
    {
        url: solarTwistLogo,
        alt: "Logo for Solar Twist company.",
        shape: "horizontal",
        background: "#f4f4f4"
    },
    {
        url: polynomialLogo,
        alt: "Logo for a support group called Polynomial.",
        shape: "box",
        background: "#101526"
    },
    {
        url: careosityLogo,
        alt: "Logo for Care-osity company.",
        shape: "box",
        background: "#f4f4f4"
    },
    {
        url: transPrideLogo,
        alt: "Logo for Trans Pride event.",
        shape: "box",
        background: "#0f204c"
    },
    {
        url: sipsAndGigglesLogo,
        alt: "Logo for Sips and Giggles fundraiser event.",
        shape: "box",
        background: "#f4f4f4"
    },
    {
        url: lifeGamesLogo,
        alt: "Logo for a mobile app called LifeGames.",
        shape: "vertical",
        background: "#a41c43"
    },
    {
        url: professionalMixerLogo,
        alt: "Logo for a mixer event called Professional Mixer Series.",
        shape: "horizontal",
        background: "#f4f4f4"
    }
];

const skills = [
    {
        title: "HTML",
        icon: htmlLogo
    },
    {
        title: "CSS",
        icon: cssLogo
    },
    {
        title: "JavaScript",
        icon: javascriptLogo
    },
    {
        title: "jQuery",
        icon: jqueryLogo
    },
    {
        title: "Bootstrap",
        icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
    },
    {
        title: "UIKit",
        icon: "https://cdn.iconscout.com/icon/free/png-64/uikit-285322.png"
    },
    {
        title: "React",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
    },
    {
        title: "Node.js",
        icon: nodejsLogo
    },
    {
        title: "MongoDB",
        icon: mongodbLogo
    },
    {
        title: "MySQL",
        icon: mysqlLogo
    },
    {
        title: "Express",
        icon: expressjsLogo
    },
    {
        title: "Visual Studio",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
    },
    {
        title: "Adobe Illustrator",
        icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
    },
    {
        title: "Adobe Photoshop",
        icon: "https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png"
    },
    {
        title: "Adobe XD",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Adobe_Experience_Design_logo.svg"
    },
    {
        title: "Adobe InDesign",
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg"
    },
    {
        title: "Adobe After Effects",
        icon: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg"
    }
]

const credits = [
    {
        text: "HTML5 Logo",
        link: "https://www.w3.org/html/logo/#downloads"
    },
    {
        text: "CSS3 Logo",
        link: "https://worldvectorlogo.com/downloaded/css3"
    },
    {
        text: "JavaScript Logo",
        link: "https://commons.wikimedia.org/wiki/File:Javascript-shield.svg"
    },
    {
        text: "jQuery Logo",
        link: "https://brand.jquery.org/logos/"
    },
    {
        text: "Bootstrap Logo",
        link: "https://commons.wikimedia.org/wiki/File:Bootstrap_logo.svg"
    },
    {
        text: "UIKit Logo",
        link: "https://iconscout.com/icon/uikit"
    },
    {
        text: "React Logo",
        link: "https://commons.wikimedia.org/wiki/File:React-icon.svg"
    },
    {
        text: "Node.js Logo",
        link: "https://nodejs.org/en/about/resources/"
    },
    {
        text: "MongoDB Logo",
        link: "https://www.mongodb.com/brand-resources"
    },
    {
        text: "MySQL Logo",
        link: "https://www.mysql.com/about/legal/logos.html"
    },
    {
        text: "Express Logo",
        link: "https://commons.wikimedia.org/wiki/File:Expressjs.png"
    },
    {
        text: "Visual Studio Logo",
        link: "https://commons.wikimedia.org/wiki/File:Visual_Studio_Code_1.35_icon.svg"
    },
    {
        text: "Adobe Illustrator Logo",
        link: "https://commons.wikimedia.org/wiki/File:Adobe_Illustrator_CC_icon.svg"
    },
    {
        text: "Adobe Photoshop Logo",
        link: "https://commons.wikimedia.org/wiki/File:Photoshop_CC_icon.png"
    },
    {
        text: "Adobe Experience Design Logo",
        link: "https://commons.wikimedia.org/wiki/File:Adobe_Experience_Design_logo.svg"
    },
    {
        text: "Adobe InDesign Logo",
        link: "https://commons.wikimedia.org/wiki/File:Adobe_InDesign_CC_icon.svg"
    },
    {
        text: "Adobe After Effects Logo",
        link: "https://commons.wikimedia.org/wiki/File:Adobe_After_Effects_CC_icon.svg"
    }
]

export default {
    getProjects: function () {
        return new Promise(resolve => {
            resolve(projects);
        });
    },
    getSkills: function () {
        return new Promise(resolve => {
            resolve(skills);
        });
    },
    getCredits: function () {
        return new Promise(resolve => {
            resolve(credits);
        });
    },
    getGDProjects: function () {
        return new Promise(resolve => {
            resolve(graphicDesignProjects);
        });
    },
    getGDLogos: function () {
        return new Promise(resolve => {
            resolve(graphicDesignLogos)
        });
    }
};