var React = require('react');

var CommentItem = React.createClass({
  render: function() {
    return (
      <div className="commentItem c-comment-item">
        <h2 className="commentAuthor c-comment-item__author">
          { this.props.author }
        </h2>
        <p className="commentBody c-comment-item__text">
          { this.props.children }
        </p>
      </div>
    );
  }
});

module.exports = CommentItem;
