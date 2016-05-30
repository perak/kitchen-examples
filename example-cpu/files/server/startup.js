// Executes script.sh every 1000ms and writes stdout (or stderr) to Output collection

Meteor.setInterval(function() {
	var command = process.env.PWD + "/private/script.sh";
	var args = "";
	execScript(command, [], Meteor.bindEnvironment(function(err, res) {
		if(err) {
			console.log(err.reason);
			Output.upsert({}, { $set: { stdout: "", stderr: err.reason }});
        } else {
			Output.upsert({}, { $set: { stdout: res, stderr: "" }});
		}
	}));
}, 1000);
