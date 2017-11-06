if (Meteor.isClient) {
    Router.route("/", function() {

        this.render("hello");
    });

    Router.route("/info", function() {

        this.render("info");
    })

    Router.route("/courses/add", function() {
        
        this.render("addCourse");
    })
        
    Router.route("/courses", function() {
                
        Meteor.subscribe("courses");
        this.render("viewAllCourses");
    })
}