import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  console.log("Meteor.Startup actually called here");
});

// Methods that can be called on the server by the client
Meteor.methods({

  addCourse: function (courseParams) {

    console.log("addCourse was called");
    console.log(courseParams);

    if (courseParams.coursename.length > 0
      && courseParams.departmentname.length > 0
      && courseParams.hours > 0) {

      courseParams.createdAt = new Date();
      CourseInfo.insert(courseParams);

      console.log("Added to DB!");
    } else {

      console.log("Not added to DB!");
    }
  },

  addProfessor: function (profParams) {

    console.log("addProfessor was called!");
    console.log(profParams);


    if (profParams.firstname.length > 0
      && profParams.lastname.length > 0
      && profParams.department.length > 0) {

      profParams.createdAt = new Date();
      ProfessorInfo.insert(profParams);

      console.log("Added to DB!");
    } else {

      console.log("Not added to DB!");
    }

  },

  addSection: function (sectionParams) {

    console.log("addSection was called");
    console.log(sectionParams);

    if (sectionParams.sectionnumber > 0
      && sectionParams.course.length > 0
      && sectionParams.professor.length > 0) {

      sectionParams.createdAt = new Date();
      SectionInfo.insert(sectionParams);

      console.log("Added to DB!");
    } else {

      console.log("Not added to DB!");
    }
  },

  resetDB: function () {
    console.log("ResetDB called. Goodbye");
    CourseInfo.remove({});
    ProfessorInfo.remove({});
    SectionInfo.remove({});
  }

});

// Publish all elements in a table:
Meteor.publish("courses", function () {
  return CourseInfo.find();
})

// Publish all elements in a table:
Meteor.publish("professors", function () {
  return ProfessorInfo.find();
})

// Publish all elements in a table:
Meteor.publish("sections", function () {
  return SectionInfo.find();
})