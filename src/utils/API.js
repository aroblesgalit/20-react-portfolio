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
    }
];

export default {
    getProjects: function() {
        return new Promise(resolve => {
            resolve(projects);
        });
    }
};