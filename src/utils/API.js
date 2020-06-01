import careerResourcesWiki from "../assets/images/careerResourcesWiki.jpg";
import superhero from "../assets/images/superheroBB.jpg";
import weatherDashboard from "../assets/images/weatherDashboard.jpg";
import digitalClass from "../assets/images/digitalClass.jpg";
import employeeTracker from "../assets/images/employeeTracker.jpg";
import googleBooksSearch from "../assets/images/googleBooksSearch.jpg";

const projects = [
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
        title: "Superhero B&B",
        description: "A mobile-first app that allows superhero fanatics to view their favorite heroes' stats.",
        imageUrl: superhero,
        githubUrl: "https://github.com/cynthia-dm1216/ProjectGroup1",
        deployedUrl: "https://cynthia-dm1216.github.io/ProjectGroup1/"
    },
    {
        title: "Google Books Search",
        description: "A React-based books search app that allows users to save books to review or purchase later.",
        imageUrl: googleBooksSearch,
        githubUrl: "https://github.com/aroblesgalit/21-google-books-search",
        deployedUrl: "https://twenty-one-google-books-search.herokuapp.com/"
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

export default {
    getProjects: function () {
        return new Promise(resolve => {
            resolve(projects);
        });
    }
};