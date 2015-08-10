Template.TEMPLATE_NAME.rendered = function() {
	// function sets editor and preview panel to full height
	function setFullHeight() {
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
	window.scrollTo(0, 0);

	var app = this.data.application;

	Session.set("humanEditorText", app.text);

	this.autorun(function (tracker) {
		var txt = Session.get("humanEditorText");
		var obj = human2machine(txt);
		Session.set("jsonEditorText", JSON.stringify(obj, null, "  "));
		Applications.update({ _id: app._id }, { $set: { text: txt, json: obj } });
	});
};

Template.TEMPLATE_NAME.events({
});

Template.TEMPLATE_NAME.helpers({
	// codemirror options here
	"humanEditorOptions": function() {
		return {
            styleActiveLine: true,
			lineNumbers: false
		}
	},

	"jsonEditorOptions": function() {
		return {
            styleActiveLine: true,
			lineNumbers: false,
			readOnly: true
		}
	}
});
