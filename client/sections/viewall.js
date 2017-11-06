Template.addSection.helpers({
    allProfessors: function () {
        return ProfessorInfo.find();
    },
    allCourses: function () {
        return CourseInfo.find();
    },
    allSections: function () {
        return SectionInfo.find();
    }
});
Template.viewAllSections.helpers({
    allSections: function () {
        return SectionInfo.find();
    },
    getProfessorName: function (id) {
        professor = ProfessorInfo.findOne(id);
        return professor.firstname + ", " + professor.lastname;
    },
    getCourseName: function (id) {
        course = CourseInfo.findOne(id);
        return course.coursename;
    }
});