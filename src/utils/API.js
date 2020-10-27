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
// Graphic Design - Logos
import timmyScottLogo from "../assets/images/timmyScott_logo.png";
import solarTwistLogo from "../assets/images/solarTwist_logo.png";
import polynomialLogo from "../assets/images/polynomial_logo.png";
import careosityLogo from "../assets/images/careosity_logo.png";
import transPrideLogo from "../assets/images/transPride_logo.png";
import sipsAndGigglesLogo from "../assets/images/sipsAndGiggles_logo.png";
import lifeGamesLogo from "../assets/images/lifeGames_logo.png";
import professionalMixerLogo from "../assets/images/professionalMixer_logo.png";
// Graphic Design - Prints
import impactReportBrochure from "../assets/images/impact-report-brochure.jpg";
import galaFlyer from "../assets/images/gala-flyer-2.jpg.png";
import sipsAndGigglesFlyer from "../assets/images/sips-and-giggles-flyer.png";
import lgbtqHangoutsFlyer from "../assets/images/lgbtqHangouts_flyer.png";
import thankYouCard from "../assets/images/thankYou-card.png";
// Posts
import gridCss from "../assets/images/gridcss.PNG";
import currentProjects from "../assets/images/currentProjects.PNG";
import alternativeTernary from "../assets/images/alternativeTernary.PNG";
import js30DrumKit from "../assets/images/js30_drumKit.PNG";
import js30Clock from "../assets/images/js30_clock.png";
import js30ArrayCardio from "../assets/images/js30_ArrayCardioDay.png";
import js30AjaxType from "../assets/images/js30_ajaxTypeAhead.png";
import js30ArrayCardio2 from "../assets/images/js30_ArrayCardioDay2.png";

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
        link: "/graphic-design/indigo-ball"
    },
    {
        title: "HyperMock",
        type: ["Logo Design", "UI Design"],
        image: hyperMockBg,
        link: "/graphic-design/hypermock"
    },
    {
        title: "Other Logos",
        type: ["Logo Designs"],
        image: otherLogosBg,
        link: "/graphic-design/other-logos"
    },
    {
        title: "Other Print Designs",
        type: ["Print Designs"],
        image: otherPrintsBg,
        link: "/graphic-design/other-prints"
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

const graphicDesignPrints = [
    {
        heading: "impact report brochure",
        description: "8.5 x 11 inches trifold brochure for the LGBTQ Center OC",
        image: impactReportBrochure
    },
    {
        heading: "gala flyer",
        description: "5 x 7 inches flyer for APAIT",
        image: galaFlyer,
        orientation: "portrait"
    },
    {
        heading: "sips & giggles flyer",
        description: "5 x 7 inches flyer for the LGBTQ Center OC",
        image: sipsAndGigglesFlyer,
        orientation: "landscape"
    },
    {
        heading: "lgbtq hangouts flyer",
        description: "4.5 x 7 inches flyer for the LGBTQ Center OC",
        image: lgbtqHangoutsFlyer,
        orientation: "portrait"
    },
    {
        heading: "thank you card",
        description: "5 x 7 inches Thank You card for the LGBTQ Center OC",
        image: thankYouCard,
        orientation: "landscape"
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

const posts = [
    {
        id: 11,
        date: "10/27/20 1:58PM",
        title: "Array Cardio Day 2",
        copy: "Had some more practice with array methods for today's JavaScript 30 challenge. I'm familiar with the methods some() and every(), but haven't really used them yet in any projects. Though I know they'll be useful someday. Some() method takes in a function and checks if any of the items in the array pass a test. It returns true as long as one item returns a true value. Every() on the other hand, only returns true if all the items in the array return true. Other methods for today's challenge were find() and findIndex(), which I've used a few times. Find() takes in function and looks for the first item that passes a test and then returns it. FindIndex(), on the other hand, returns only the index of the first item that passes a test. The last part of this challenge was to remove the item of the given index from the array. With splice(), this can be done by passing in the given index and a value of 1, but this will modify the original array as well. To preserve the original array, you can use the spread operator to create a new array, which you would then use the splice() method on. Or you could also use the spread operator and the slice() method. The slice() method returns the selected items without changing the original array. So with slice() method, you would select index 0 to the given index, and select everything else above the given index.",
        image: js30ArrayCardio2
    },
    {
        id: 10,
        date: "10/26/20 5:30PM",
        title: "Ajax Type Ahead",
        copy: "Today's JavaScript 30 challenge is a small City Search application that also highlights the search value in the results. Using an API endpoint, I first fetched the cities and pushed them into an empty array. Then I created a function that accepts the search term and cities array as arguments. Using regex on the search term, I filtered through the cities array and returned the results. I created another function that maps over the matches, returns string literals for each item, and displays the results on the DOM.",
        image: js30AjaxType,
        gif: "https://j.gifs.com/q7vOBp.gif"
    },
    {
        id: 10,
        date: "10/25/20 12:20PM",
        title: "Flex Panels Image Gallery",
        copy: "I've always been a fan of flex and today I had the opportunity to work on an image gallery that implements it on a click event. I decided to add an extra logic for only allowing one panel to be opened at a time. Although, I've used flex a lot, I still learned a few things from today's JavaScript 30 challenge that I'm thinking of using on future projects.",
        gif: "https://j.gifs.com/jZlzQR.gif"
    },
    {
        id: 9,
        date: "10/24/20 1:08PM",
        title: "Array Cardio Day 1",
        copy: "Went back to JavaScript fundamentals today and had some more practiced with array methods: filter, map, sort, and reduce. The nice thing about this challenge being a recorded video is that I'm able to pause the video and try the exercises myself before I see the solutions. I'm proficient in filter and map, so I only really needed to look up sort and reduce to brush up on them. The last exercise of summing up the instances of each of the items in an array using reduce was new to me. I'll be keeping this one in mind for when an opportunity to use it arises.",
        image: js30ArrayCardio
    },
    {
        id: 8,
        date: "10/23/20 10:36PM",
        title: "CSS Variables",
        copy: "I have some experience with CSS variables, but I admit I don't use it as often as I should. It does make updating certain values a lot easier when you create a variable for it. For example, creating a variable for a primary color on your site avoids having to copy and paste it over and over again. Creating a variable allows you to also change it with JavaScript, which is what today's JavaScript 30 challenge was about. Using sliders for spacing, blur, and color, I added change and mouseover events to handle the change in values. Each of the slider inputs have a 'name' attribute that corresponds to the css variables I've created. So everytime a certain slider is changed, it updates the correct variable value.",
        gif: "https://j.gifs.com/mOooK3.gif"
    },
    {
        id: 7,
        date: "10/22/20 11:23PM",
        title: "CSS + JS Clock",
        copy: "Today's JavaScript 30 challenge was to create the logic for moving the hands of a clock using JavaScript's built-in Date Object and converting the hours, minutes, and seconds into degrees. To move each hand, css properites of transform-origin, transform rotate, transition, and transition-timing-function were used. This challenge was a good practice for utilizing a built-in JavaScript object along with CSS properties transform and transition.",
        image: js30Clock
    },
    {
        id: 6,
        date: "10/21/20 8:39PM",
        title: "JavaScript 30",
        copy: "I've been seeing posts from other web developers regarding the 30 Day Vanilla JS Coding Challenge and realized they're learning things I have yet to learn myself. Today marks my first day of this coding challenge, which helped me brush up on key events and DOM manipulation by writing the script for a JavaScript Drum Kit. Looking forward to getting better at JavaScript by building things through this challenge.",
        image: js30DrumKit
    },
    {
        id: 5,
        date: "10/18/20 5:25PM",
        title: "Mobile Navbar",
        copy: "I decided to make another update to my site by turning the navbar for mobile view into a bottom navbar using icons. This way it's just one click to view another page within my site. I also updated the navigation for my graphic design projects to hide itself when not scrolling so it's not in the way."
    },
    {
        id: 4,
        date: "10/14/20 8:55PM",
        title: "An Alternative to Ternary",
        copy: "I updated some of my components in my portfolio to use the && (AND) operation rather than the ternary operator where the second part is an empty ('') string. This does exactly the same thing as long as the first part of the && operation is a 'truthy' value. This makes my code cleaner and easier to read.",
        image: alternativeTernary
    },
    {
        id: 3,
        date: "10/12/20 5:30PM",
        title: "Current Projects",
        copy: "This week, I will continue to work on a couple of projects: UT Course Registration and Prentus App. I'm collaborating with another web developer from my coding bootcamp cohort on a redesign of the UT at Austin course registration system and course catalog, which his friend did the UX Research and Design on. Our goal is to turn this into a functional application using the MERN stack. We've finished most of the UIs and will soon tackle the logic behind each page. The image below is just a snippet of the RegisterForm component I coded this past weekend. The other project I'm working on is for an internship I'm currently taking with Prentus, a startup where bootcamp grads can connect. I'm working on the backend and database with another developer. We have created some of the tables and schemas already on Google Cloud and will continue to create the rest.",
        image: currentProjects
    },
    {
        id: 2,
        date: "10/11/20 7:45PM",
        title: "Grid CSS",
        copy: "There are times, like today, when I look through my portfolio site and wonder what I can do to make it look better either by implementing something I just learned or something else I want a bit more practice with. I chose to update my about section using Grid CSS, which I've delved into a while back but never really used it much recently. I wanted the div that contains the text to overlap part of the dark background from the section above it and remain responsive on mobile. Using Grid, I defined the parent element to be the grid container with 3 rows of 100px, 100px, and auto height respectively and 3 columns of 25%, auto, and 25% width respectively. I then defined a div element as one item that takes in the same dark backgorund color as the previous section. This covers the first 2 whole rows. The div containing the text is the other item which covers the middle column of the second row as to overlap the dark background and expands to the height of its contents.",
        image: gridCss
    },
    {
        id: 1,
        date: "10/10/20 11:23PM",
        title: "Posts Page",
        copy: "I decided to create a page for my posts on my site instead of posting on social media like LinkedIn. This is more for me to record things I feel are post worthy. So here is my first post regarding this page itself and its future contents. Here you'll find posts on new things I've just learned, tutorials, recent achievements, projects, and more."
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
            resolve(graphicDesignLogos);
        });
    },
    getGDPrints: function () {
        return new Promise(resolve => {
            resolve(graphicDesignPrints);
        });
    },
    getPosts: function() {
        return new Promise(resolve => {
            resolve(posts);
        });
    }
};