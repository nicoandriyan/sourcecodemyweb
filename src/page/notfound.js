import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class NotFound extends Component {
	render() {
		return (
			<div className="back-container notfound" data-bg-text="not found">
				<h1>404</h1>
				<p>There isn't a Pages site here</p>
				<p><NavLink to="/amazingnick/"><span className="link">go to homepage</span></NavLink></p>
			</div>
		);
	}
}

export default NotFound;