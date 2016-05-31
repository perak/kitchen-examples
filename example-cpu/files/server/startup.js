// Executes script.sh every 1000ms and writes stdout (or stderr) to Output collection

Meteor.setInterval(function() {
	var command = "script.sh";
	var args = "";

	var assetsRoot = process.env.PWD + (process.env.NODE_ENV == "production" ? "/app/programs/server/assets/app" : "/private");
	execScript(assetsRoot + "/" + command, args, Meteor.bindEnvironment(function(err, res) {
		if(err) {
			console.log(err.reason);
			Output.upsert({}, { $set: { stdout: "", stderr: err.reason }});
        } else {
			Output.upsert({}, { $set: { stdout: res, stderr: "" }});
		}
	}));
}, 1000);
