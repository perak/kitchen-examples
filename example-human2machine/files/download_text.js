var app = Applications.findOne({_id: this.params.applicationId });
if(!app || !app.text) {
	this.response.writeHead(404, {'Content-Type': 'text/plain; charset=UTF-8'});
	this.response.end("Not found.");
} else {
	this.response.writeHead(200, {
		"Content-Type": "plain/text",
		"Content-Disposition": "attachment; filename=\"" + app._id + ".txt\""
	});

	this.response.end(app.text);
}
