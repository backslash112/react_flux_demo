var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _tweets = {};
var CHANGE_EVENT = 'change';

function create(text) {
	var id = Date.now();
	_tweets[id] = {
		id: id,
		text: text
	};
}

var TweetStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback)
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	getAll: function() {
		var id = Date.now();
		_tweets[id] = {
			id: id,
			text: 'item'+id
		};
		return _tweets;
	},
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	}
});

function handleAction(action) {
	if (action.type === 'receive_tweet') {
		create(action.text);
		TweetStore.emitChange();
	}
}

TweetStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = TweetStore;