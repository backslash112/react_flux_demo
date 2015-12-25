var React = require('react');
var Collection = require('./Collection.react.js');

var Application = React.createClass({

	getInitialState: function() {
		return {
			collectionTweets: [
				{id: '1'},
				{id: '2'},
				{id: '3'},
			]
		};
	},

	render: function() {
		return (
			<div className="container-fluid">
				<div className="header">
					<h2>Tweets Collection</h2>
				</div>
				
				<div className="col-md-8">
					<Collection tweets={this.state.collectionTweets} />
				</div>

			</div>
		);
	}

});

module.exports = Application;