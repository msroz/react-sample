var React = require('react');
var CommentBox = require('./comment/commentBox.jsx');

var Body = React.createClass({
  render: function() {
    return (
      <div>
        <CommentBox />
      </div>
    );
  }
});

module.exports = Body;
