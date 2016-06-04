var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="p-footer">
        <ul className="p-footer__list">
          <li className="p-footer__list__item">
            © 2016
          </li>
          <li className="p-footer__list__item">
            React Sample
          </li>
        </ul>
      </footer>
    );
  }
});

module.exports = Footer;
