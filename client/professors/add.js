

Template.addProfessor.events({
    'click #submit': function (event, instance) {
        if (event && event.preventDefault) event.preventDefault();

        var profParams = {};

        profParams.firstname = $("#firstname").val();
        profParams.lastname = $("#lastname").val();
        profParams.department = $("#department").val();

        console.log("Adding professor for data: ");
        console.log(profParams);

        Meteor.call("addProfessor", profParams);

        Router.go('/professors');
    }


});