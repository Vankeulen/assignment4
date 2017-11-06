import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.header.events({ 
	'click #resetDB'(event, instance) { 
		Meteor.call("resetDB");
	}
});
