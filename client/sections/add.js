Template.addSection.events({
    'click #submit': function (event, instance) {
        if (event && event.preventDefault) event.preventDefault();

        var sectionParams = {};

        sectionParams.sectionnumber = +$("#sectionnumber").val();
        sectionParams.professor = $("#professor").val();
        sectionParams.course = $("#course").val();

        console.log("Adding section for data: ");
        console.log(sectionParams);

        Meteor.call("addSection", sectionParams);

        Router.go('/sections');
    }


});