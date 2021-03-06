if (Meteor.isClient) {
    Router.route("/", function () {

        this.render("welcome");
    });

    Router.route("/courses/add", function () {

        this.render("addCourse");
    })

    Router.route("/courses", function () {

        Meteor.subscribe("courses");
        this.render("viewAllCourses");
    })

    Router.route("/professors/add", function () {

        this.render("addProfessor");
    })

    Router.route("/professors", function () {

        Meteor.subscribe("professors");
        this.render("viewAllProfessors");
    })

    Router.route("/sections/add", function () {
        Meteor.subscribe("courses");
        Meteor.subscribe("professors");
        this.render("addSection");
    })

    Router.route("/sections", function () {
        // pulls data from database for the page.
        Meteor.subscribe("sections");
        Meteor.subscribe("professors");
        Meteor.subscribe("courses");
        this.render("viewAllSections");
    })
}