var React    = require('react');
var ReactDOM = require('react-dom');

var Index = React.createClass({
  render: function() {
    return (
      <div>
          Hello React
      </div>
    );
  }
});

ReactDOM.render(
  <Index />,
  document.getElementById('container')
);
