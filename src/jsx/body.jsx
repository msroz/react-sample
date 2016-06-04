var React = require('react');
var CommentBox = require('./comment/commentBox.jsx');

var Body = React.createClass({
  render: function() {
    return (
      <div id="page-body">
        <CommentBox />
      </div>
    );
  }
});

module.exports = Body;
