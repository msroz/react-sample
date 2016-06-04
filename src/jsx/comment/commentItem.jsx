var React = require('react');

var CommentItem = React.createClass({
  render: function() {
    return (
      <div className="commentItem">
        <h2 className="commentAuthor">
          { this.props.author }
        </h2>
        <p className="commentBody">
          { this.props.children }
        </p>
      </div>
    );
  }
});

module.exports = CommentItem;
