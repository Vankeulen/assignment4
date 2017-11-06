Template.addCourse.events({
    'click #submit': function (event, instance) {
        if (event && event.preventDefault) event.preventDefault();

        var courseParams = {};

        courseParams.coursename = $("#coursename").val();
        courseParams.departmentname = $("#departmentname").val();
        courseParams.hours = +$("#hours").val();

        console.log("Adding course for data: ");
        console.log(courseParams);

        Meteor.call("addCourse", courseParams);

        Router.go('/courses');
    }


});