var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav= React.createClass({
  render: function () {
    return (
      <div>
        <h2>Nav Component</h2>
        <IndexLink to='/' activeClassName='active'>Get Weather</IndexLink>
        <Link to='/about' activeClassName='active'>About</Link>
        <Link to='/example' activeClassName='active'>Example</Link>

        <a href='#/about'>about</a>
      </div>

    );
  }
});


module.exports = Nav;
