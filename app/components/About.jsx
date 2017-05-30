var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>Hi I'm Brian Albin and I'll be your guide to the world!</p>
			<h2 className="text-center">Tools I used</h2>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a>
				</li>
				<li>
					<a href="http://openweathermap.org">Open Weather Map</a>
				</li>
			</ul>
		</div>
	);
}

module.exports = About;