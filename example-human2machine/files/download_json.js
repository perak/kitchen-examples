var app = Applications.findOne({_id: this.params.applicationId });
if(!app || !app.json) {
	this.response.writeHead(404, {'Content-Type': 'text/plain; charset=UTF-8'});
	this.response.end("Not found.");
} else {
	this.response.writeHead(200, {
		"Content-Type": "application/octet-stream",
		"Content-Disposition": "attachment; filename=\"" + app._id + ".json\""
	});

	this.response.end(JSON.stringify(app.json, null, '\t'));	
}
