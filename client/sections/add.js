Template.addSection.events({
    'click #submit': function (event, instance) {
        if (event && event.preventDefault) event.preventDefault();

        var sectionParams = {
            sectionnumber: +$("#sectionnumber").val(),
            professor: $("#professor").val(),
            course: $("#course").val(),

        };

        console.log("Adding section for data: ");
        console.log(sectionParams);

        Meteor.call("addSection", sectionParams);

        Router.go('/sections');
    }


});