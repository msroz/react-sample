var React    = require('react');
var ReactDOM = require('react-dom');
var Header   = require('./jsx/shared/header.jsx');
var Body     = require('./jsx/body.jsx');
var Footer   = require('./jsx/shared/footer.jsx');

var Index = React.createClass({
  render: function() {
    return (
      <div>
          <Header />
          <Body />
          <Footer />
      </div>
    );
  }
});

ReactDOM.render(
  <Index />,
  document.getElementById('container')
);
