const projects = [
    {
        title: "Career Resources & Wiki",
        description: "A full-stack app that allows users to post and get resources about job fields of their choice.",
        imageUrl: "../../public/assets/images/careerResourcesWiki.jpg",
        githubUrl: "https://github.com/aroblesgalit/Project2",
        deployedUrl: "https://secure-shelf-77308.herokuapp.com/"
    },
    {
        title: "Superhero B&B",
        description: "A mobile-first application that allows superhero fanatics to view their favorite heroes' informations.",
        imageUrl: "../../public/assets/images/superheroBB.jpg",
        githubUrl: "https://github.com/cynthia-dm1216/ProjectGroup1",
        deployedUrl: "https://cynthia-dm1216.github.io/ProjectGroup1/"
    },
    {
        title: "Weather Dashboard",
        description: "A weather dashboard application that shows the current and future weather information of a city.",
        imageUrl: "../../public/assets/images/weatherDashboard.jpg",
        githubUrl: "https://github.com/aroblesgalit/06-Weather-Dashboard",
        deployedUrl: "https://aroblesgalit.github.io/06-Weather-Dashboard/"
    },
    {
        title: "Team Profile Generator",
        description: "A command-line interface application for dynamically generating a team profile html.",
        imageUrl: "../../public/assets/images/weatherDashboard.jpg",
        githubUrl: "https://github.com/aroblesgalit/10-Team-Profile-Generator"
    },
    {
        title: "Employee Tracker",
        description: "A Command line interface for tracking employees within a company.",
        imageUrl: "../../public/assets/images/employeeTracker.jpg",
        githubUrl: "https://github.com/aroblesgalit/12-Employee-Tracker"
    },
    {
        title: "Work Day Scheduler",
        description: "A simple calendar day scheduler with color coordinated rows for past, present, and futre tasks.",
        imageUrl: "../../public/assets/images/workDayScheduler.jpg",
        githubUrl: "https://github.com/aroblesgalit/05-Work-Day-Scheduler",
        deployedUrl: "https://aroblesgalit.github.io/05-Work-Day-Scheduler/"
    }
];

export default {
    getProjects: function() {
        return new Promise(resolve => {
            resolve(projects);
        });
    }
};