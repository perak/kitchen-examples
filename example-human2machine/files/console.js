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
	
	Session.set("appId", this.data.params.applicationId);
	Session.set("jsonEditorText", JSON.parse(this.data.application.json));
};

Template.TEMPLATE_NAME.events({
});

Template.TEMPLATE_NAME.helpers({
	"jsonEditorOptions": function() {
		return {
			lineNumbers: false,
			readOnly: true
		}
	}
});
