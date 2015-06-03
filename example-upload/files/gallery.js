Template.TEMPLATE_NAME.events({
	"click .new-file": function(e, t) {
		Router.go("PAGE_ROUTE_NAME.insert");
	},

	"click .delete-file": function(e, t) {
		e.preventDefault();
		var self = this;
		bootbox.dialog({
			message: "Delete item?",
			title: "Delete",
			animate: false,
			buttons: {
				success: {
					label: "Yes",
					className: "btn-success",
					callback: function() {
						COLLECTION_VAR.remove({ _id: self._id });
					}
				},
				danger: {
					label: "No",
					className: "btn-default"
				}
			}
		});
		return false;
	}
});

Template.TEMPLATE_NAME.helpers({
});
