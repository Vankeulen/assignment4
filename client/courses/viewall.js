
Template.viewAllCourses.helpers({
    allCourses: function () {
        return CourseInfo.find();
    }
})