var React = require('react');
var TweetStore = require('../stores/TweetStore.react.js');

function getTweetState() {
	return {
		collectionTweets: TweetStore.getAll()
	};
}

var Collection = React.createClass({

	getInitialState: function() {
		return getTweetState();
	},

	getListOfTweetIds: function () {
		return Object.keys(this.state.collectionTweets);
	},

	getTweetElement: function(tweet) {
		var tweetItem = this.state.collectionTweets[tweet];
		return (
			<li>
				<h3>{tweetItem.text}</h3>
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
	},

	componentDidMount: function() {
		TweetStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		TweetStore.removeChangeListener(this._onChange);
	},
	_onChange: function() {
		this.setState(getTweetState());
	}
});

module.exports = Collection;