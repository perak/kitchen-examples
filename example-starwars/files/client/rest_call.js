Template.TEMPLATE_NAME.events({
	"click .client-request": function(event, template) {
		event.preventDefault();
      
		// read params from input box
		var params = template.find("input[name='params']").value;

		// construct URL with params
		var url = "http://swapi.co/api/" + params;

		// animate loading
		$(template.find(".client-request")).button("loading");

		// HTTP call
		HTTP.call("GET", url, function(err, res){
			// stop animating loading
			$(template.find(".client-request")).button("reset");

			// process result
			if(err){
				// error
				alert(err.reason);
			} else {
				// success: show result
				$(template.find(".result")).text("\n" + JSON.stringify(JSON.parse(res.content), null, '\t') + "\n");
			}
		});

		return false;
	},
  
	"click .server-request": function(event, template) {
		event.preventDefault();
      
		// read params from input box
		var params = template.find("input[name='params']").value;

		// animate loading
		$(template.find(".server-request")).button("loading");

		// HTTP call
		Meteor.call("starWars", params, function(err, res){
			// stop animating loading
			$(template.find(".server-request")).button("reset");

			// process result
			if(err){
				// error
				alert(err.reason);
			} else {
				// success: show result
				$(template.find(".result")).text("\n" + JSON.stringify(res, null, '\t') + "\n");
			}
		});

		return false;
	}

});
