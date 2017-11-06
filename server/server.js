import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  console.log("Meteor.Startup actually called here");
});

// Methods that can be called on the server by the client
Meteor.methods({
  
  addCourse: function(courseParams) {

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

  resetDB: function() {
		console.log("ResetDB called. Goodbye");
		CourseInfo.remove({});
	}

});

// Publish all elements in a table:
Meteor.publish("courses", function() {
	return CourseInfo.find();
})