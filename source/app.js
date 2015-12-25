var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./components/Application.react');


// var ReactClass = React.createClass({
// 	render: function() {
// 		return React.createElement('h1', {className: 'header'}, 'React Component');
// 	}
// });
// var reactComponentElement = React.createElement(Application);
// var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));


ReactDOM.render(<Application />, document.getElementById('react-application'));