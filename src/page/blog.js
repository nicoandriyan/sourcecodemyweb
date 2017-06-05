import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Blog extends Component {
	render() {
		return (
			<div className="blog-container pt120" data-bg-text="sorry.. this page is under construction">
				<NavLink exact to="/">
					<span className="backbtn"></span>
				</NavLink>
			</div>
		);
	}
}

export default Blog;