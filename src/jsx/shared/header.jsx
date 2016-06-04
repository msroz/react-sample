var React = require("react");

var Header = React.createClass({
  render: function() {
    return (
      <header id="page-header" className="p-header">
        <nav className="p-header__nav">
          <ul className="p-header__nav__list">
            <li className="p-header__nav__list__item">
              <a href="/" className="p-header__nav__list__item__link">
                HOME
              </a>
            </li>
            <li className="p-header__nav__list__item">
              <a target="_blank" href="http://facebook.github.io/react/index.html" className="p-header__nav__list__item__link">
                React
              </a>
            </li>
            <li className="p-header__nav__list__item">
              <a target="_blank" href="http://qiita.com/tags/react.js" className="p-header__nav__list__item__link">
                Qiita
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
});

module.exports = Header;
