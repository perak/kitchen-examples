Meteor.methods({
	"starWars": function(params) {

		// construct url with params
		var url = "http://swapi.co/api/" + params;

		// HTTP call
		var result = HTTP.call("GET", url);
      
		return JSON.parse(result.content);
    }
});
