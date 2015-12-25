var AppDispatcher = require('../dispatcher/AppDispatcher');

var TweetActionCreators = {
	create: function(text) {

		var action = {
			type: 'receive_tweet',
			text: text
		};

		AppDispatcher.dispatch(action);
	}
};

module.exports = TweetActionCreators;