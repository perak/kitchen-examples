export class TEMPLATE_NAME extends Component {

	constructor() {
		super();
	}

	componentWillMount() {

	}

	componentWillUnmount() {

	}

	componentDidMount() {

	}

	onClickNewFile(e) {
		FlowRouter.go("PAGE_ROUTE_NAME.insert");
	}

	onClickDeleteFile(e) {
		e.preventDefault();
		var self = this;
		var itemId = $(e.currentTarget).attr("data-id");
		ConfirmationDialog({
			message: "Are you sure you want to delete item?",
			title: "Delete",
			onYes: function(id) {
				Meteor.call("galleryRemove", id);
			},
			onNo: function(id) {
			},
			onCancel: function(id) {
			},
			buttonYesTitle: "Yes",
			buttonNoTitle: "No",
			payload: itemId
		});
		return false;
	}

	renderFile(file) {
		if(!file) {
			return;
		}

		if(file.isImage()) {
			return (
				<a href={file.url()} target="_blank">
					<img src={file.url()} width="100%" />
				</a>
			);
		}

		if(file.isAudio()) {
			return (
				<audio src={file.url()} width="100%" controls="controls">
				</audio>
			);
		}

		if(file.isVideo()) {
			return (
				<video src={file.url()} width="100%" controls="controls">
				</video>
			);
		}
	}

	render() {
		var self = this;
		return (
			<div>
				<h2>
					
					COMPONENT_TITLE
							
					<button type="button" className="btn btn-success pull-right new-file" onClick={this.onClickNewFile}>
						<span className="fa fa-plus">
						</span>
						Add file								
					</button>
				</h2>
				<p>
					This example application is built with 
					<a href="http://www.meteorkitchen.com">
						Meteor Kitchen
					</a>
					 - source code generator for Meteor.js.
							Source code is 
					<a href="https://github.com/perak/kitchen-examples/tree/master/example-upload" target="_blank">
						here
					</a>
				</p>
				<hr />
				{this.props.data.QUERY_NAME.length ? (
					<div className="row">
						{
							this.props.data.QUERY_NAME.map(function(item, itemIndex) {
								return (
									<div className="col-xs-12 col-sm-4 col-md-3" style={{padding: "10px"}} key={itemIndex}>
										<h4>
											<a href="#" data-id={item._id} className="delete-file pull-right" onClick={self.onClickDeleteFile}>
												<span className="fa fa-close">
												</span>
											</a>
											{item.title}					
										</h4>
										{self.renderFile(item.file)}
									</div>
								);
							})
						}
					</div>
				) : (
					<div className="alert alert-info">
						Gallery is empty :(
					</div>
				)}

			</div>
		);
	}
}
