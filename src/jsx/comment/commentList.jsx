var React = require('react');
var CommentItem = require('./CommentItem.jsx');

var CommentList = React.createClass({
  render: function() {
    var commentItems = this.props.data.map(function(comment, i) {
      return (
        <CommentItem author={comment.author} key={i}>
          { comment.text }
        </CommentItem>
      );
    });

    return (
      <div className="commentList">
        { commentItems }
      </div>
    );
  }
});

module.exports = CommentList;
