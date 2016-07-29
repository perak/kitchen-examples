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

	// initial text
	Session.set("editorText", "# Markdowned\n\n### Markdown editor with live preview\n\nBuilt in few minutes with [Meteor Kitchen](http://www.meteorkitchen.com) - source code generator for Meteor.js\n\n**Enjoy! :)**\n\n");
}

Template.TEMPLATE_NAME.events({
});

Template.TEMPLATE_NAME.helpers({
	// codemirror options here
	"editorOptions": function() {
        return {
            styleActiveLine: true,
            lineNumbers: false,
            styleActiveLine: true,
            mode: "markdown"
        }
	},

	// codemirror initial text
	"editorText": function() {
		return Session.get("editorText");
	}
});
