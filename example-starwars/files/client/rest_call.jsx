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

	onClickClientRequest(e) {
		
				event.preventDefault();
		      
				// read params from input box
				var params = $("input[name='params']").val();
		
				// construct URL with params
				var url = "http://swapi.co/api/" + params;
		
				// animate loading
				$(".client-request").button("loading");
		
				// HTTP call
				HTTP.call("GET", url, function(err, res){
					// stop animating loading
					$(".client-request").button("reset");
		
					// process result
					if(err){
						// error
						alert(err.reason);
					} else {
						// success: show result
						$(".result").text("\n" + JSON.stringify(JSON.parse(res.content), null, '\t') + "\n");
					}
				});
		
				return false;
			
	}

	onClickServerRequest(e) {
		
				event.preventDefault();
		      
				// read params from input box
				var params = $("input[name='params']").val();
		
				// animate loading
				$(".server-request").button("loading");
		
				// HTTP call
				Meteor.call("starWars", params, function(err, res){
					// stop animating loading
					$(".server-request").button("reset");
		
					// process result
					if(err){
						// error
						alert(err.reason);
					} else {
						// success: show result
						$(".result").text("\n" + JSON.stringify(res, null, '\t') + "\n");
					}
				});
		
				return false;
			
	}

	render() {
		return (
			<div>
				<form>
					<h1>
						Example REST request
					</h1>
					<div className="form-group">
						<label htmlFor="params">
							
											URL params
										
						</label>
						<input type="text" className="form-control" name="params" defaultValue="people/1/" />
					</div>
					<button type="button" className="btn btn-success client-request" onClick={this.onClickClientRequest}>
						
									Request from client
						      	
					</button>
					<button type="button" className="btn btn-primary server-request" onClick={this.onClickServerRequest}>
						
									Request from server
								
					</button>
				</form>
				<br />
				<pre>
					<code className="result">
					</code>
				</pre>

			</div>
		);
	}
}
