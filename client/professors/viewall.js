
Template.viewAllProfessors.helpers({
    allProfessors: function () {
        return ProfessorInfo.find();
    }
})