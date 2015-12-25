var React = require('react');
var TweetStore = require('../stores/TweetStore.react.js');
var TweetActionCreators = require('../actions/TweetActionCreators.react.js');

var NewItem = React.createClass({
	render: function() {
		return (
			<div className="container">
				<button onClick={this.onClick}>Add one</button>
			</div>
		);
	},
	onClick: function() {
		console.log("onClick");
		TweetActionCreators.create("new item");
	}
});

module.exports = NewItem;