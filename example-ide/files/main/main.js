Template.TEMPLATE_NAME.rendered = function() {
	function setFullHeight() {
		if(!$(".CodeMirror").length) return;

		var viewHeight = $(window).height();
		var footerHeight = $("#footer").outerHeight();
		var codeTop = $(".CodeMirror").offset().top;

		var availableHeight = viewHeight - footerHeight - codeTop;
		if(availableHeight < 200) {
			availableHeight = 200;
		}

		$(".CodeMirror").height(availableHeight);
		$(".full-height").height(availableHeight);
	}

	// set full height on window resize
	$(window).resize(function() {
		setFullHeight();
	});

	// full height initialy
	setFullHeight();

	// initial text
	var fileContent = (this.data.params.fileId && this.data.file) ? this.data.file.content : "";
	Session.set("editorText", fileContent);
};

Template.TEMPLATE_NAME.events({
	"click .file-save": function(e, t) {
		var content = Session.get("editorText");
		COLLECTION_VAR.update({ _id: this.params.fileId }, { $set: { content: content } }, function(e, t) {
			if(e) {
				alert("Unable to save!\n\n" + e.message);
			}
		});
	}
});

Template.TEMPLATE_NAME.helpers({
	"isFile": function() {
		return this.file && this.file.type === "item";
	},

	"editorOptions": function() {
		var options = {
            styleActiveLine: true,
			lineNumbers: true,
			keyMap: "sublime",
			theme: "blackboard",
			lint: false
		};

		if(this.file && this.file.filename) {
			var ext = this.file.filename.split('.').pop();
			switch(ext) {
				case "json": { options.mode = "application/ld+json"; options.lint = true; } break;
				case "js": { options.mode = "javascript"; options.lint = true; } break;
				case "html": { options.mode = "htmlmixed"; options.lint = false; } break;
				case "md": { options.mode = "markdown"; options.lint = false; } break;
			}
		}

		if(options.lint) options.gutters = ["CodeMirror-lint-markers"];

		return options;
	},
	"editorText": function() {
		return Session.get("editorText");
	}
});
