var React = require('react');
var Collection = require('./Collection.react.js');
var TweetStore = require('../stores/TweetStore.react.js');
var NewItem = require('./NewItem.react.js');

var Application = React.createClass({

	// getInitialState: function() {
	// 	return {
	// 		collectionTweets: TweetStore.getAll()
	// 	};
	// },

	render: function() {
		return (
			<div className="container-fluid">
				<div className="header">
					<h2>Tweets Collection</h2>
				</div>
				
				<div className="col-md-8">
					<Collection />
				</div>
				<div className="col-md-9">
					<NewItem />
				</div>
			</div>
		);
	}

});

module.exports = Application;