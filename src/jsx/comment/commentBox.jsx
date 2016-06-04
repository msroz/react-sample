var React = require('react');
var CommentList = require('./commentList.jsx');
var CommentForm = require('./commentForm.jsx');

var CommentBox = React.createClass({
  handleCommentSubmit: function(comment) {
      var commentItems = this.state.data;
      var newComments = commentItems.concat([comment]);
      this.setState({ data: newComments });
      console.log("TODO: request to server.");
  },
  getInitialState: function() {
    return { data: [] };
  },
  componentDidMount: function() {
    var data = [
      {"author": "Pete Hunt", "text": "This is one comment"},
      {"author": "Jordan Walke", "text": "This is *another* comment"}
    ];

    this.setState({
      data: data
    });
  },
  render: function() {
    return (
        <div className="commentBox">
          <h1>Comment Box</h1>
          <CommentList data={this.state.data} />
          <CommentForm onCommentSubmit={this.handleCommentSubmit }/>
        </div>
    );
  }
});

module.exports = CommentBox;
