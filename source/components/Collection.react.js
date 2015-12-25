var React = require('react');

var Collection = React.createClass({

	getListOfTweetIds: function () {
		return Object.keys(this.props.tweets);
	},

	getTweetElement: function(tweet) {
		return (
			<li>
				<h3>{tweet}</h3>
			</li>
			);
	},
	
	render: function() {
		var tweetElements = this.getListOfTweetIds().map(this.getTweetElement);
		return (
			<div>
			{tweetElements}
			</div>
		);
	}
});

module.exports = Collection;